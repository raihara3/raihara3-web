import { Project } from "@/lib/types";

/**
 * microCMS API client.
 *
 * Content is fetched server-side only; the API key is never exposed to the
 * browser. The response is statically cached and purged on demand when
 * microCMS calls the revalidate webhook (see src/app/api/revalidate/route.ts),
 * so publishing in microCMS updates the site without a redeploy.
 */

const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const API_KEY = process.env.MICROCMS_API_KEY;

interface MicroCMSImage {
  url: string;
  width?: number;
  height?: number;
}

/** Raw project shape as returned by the microCMS `projects` API. */
interface MicroCMSProject {
  id: string;
  title: string;
  labels?: string[];
  publication_date?: string;
  description?: string;
  detail?: string;
  thumbnail?: MicroCMSImage;
  images?: MicroCMSImage[];
  url?: string;
  featured?: boolean;
}

interface MicroCMSListResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}

/**
 * Only allow http(s) links to reach the UI's `href`. CMS-authored URLs are
 * trusted-ish (the author is the site owner), but rejecting other schemes such
 * as `javascript:` is a cheap defense against a stored-XSS style mistake.
 */
function sanitizeUrl(url: string | undefined): string {
  if (!url) return "";
  return /^https?:\/\//i.test(url) ? url : "";
}

async function fetchProjects(): Promise<MicroCMSProject[]> {
  if (!SERVICE_DOMAIN || !API_KEY) {
    throw new Error(
      "MICROCMS_SERVICE_DOMAIN and MICROCMS_API_KEY must be set."
    );
  }

  // Sort ascending by publication date so the oldest project is index 0,
  // matching the historical catalog order (PLN-001 = first project).
  // limit=100 comfortably covers the portfolio's scale; revisit with
  // pagination if the project count ever approaches it.
  const endpoint = `https://${SERVICE_DOMAIN}.microcms.io/api/v1/projects?limit=100&orders=publication_date`;

  const response = await fetch(endpoint, {
    headers: { "X-MICROCMS-API-KEY": API_KEY },
    cache: "force-cache",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch projects: ${response.status}`);
  }

  const data: MicroCMSListResponse<MicroCMSProject> = await response.json();
  return data.contents;
}

/**
 * Returns projects normalized to the UI domain model, ordered oldest first and
 * numbered sequentially. The microCMS GET API only returns published content,
 * so publish state is controlled from microCMS itself. The UI reverses this
 * list to show the newest project first.
 */
export async function getProjects(): Promise<Project[]> {
  const contents = await fetchProjects();

  return (
    contents
      // Deterministic order even if a project is missing publication_date:
      // fall back to the stable content id as a tiebreaker.
      .sort(
        (a, b) =>
          (a.publication_date ?? "").localeCompare(b.publication_date ?? "") ||
          a.id.localeCompare(b.id)
      )
      .map((content, index) => ({
        id: content.id,
        number: index + 1,
        title: content.title,
        labels: content.labels ?? [],
        description: content.description ?? "",
        detail: content.detail ?? "",
        url: sanitizeUrl(content.url),
        imageUrl: content.thumbnail?.url ?? content.images?.[0]?.url ?? "",
        featured: content.featured ?? false,
        // Take the date part only and use dots, e.g. "2026-02-05..." -> "2026.02.05".
        date: content.publication_date
          ? content.publication_date.slice(0, 10).replace(/-/g, ".")
          : "",
      }))
  );
}
