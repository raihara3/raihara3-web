import crypto from "node:crypto";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * Webhook endpoint for microCMS. Configure a microCMS webhook to POST here on
 * content publish; it purges the cached home page so the site reflects the
 * change without a redeploy.
 *
 * Authenticity is verified with microCMS's HMAC-SHA256 signature: microCMS
 * signs the request body with the secret configured in the webhook settings and
 * sends it in the `X-MICROCMS-Signature` header. The same secret is stored in
 * the MICROCMS_WEBHOOK_SECRET environment variable. Comparison is constant-time
 * and the secret is never transmitted in the URL.
 */
export async function POST(request: NextRequest) {
  const secret = process.env.MICROCMS_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json(
      { message: "Webhook secret not configured" },
      { status: 500 }
    );
  }

  const signature = request.headers.get("x-microcms-signature");
  const body = await request.text();
  const expected = crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("hex");

  if (
    !signature ||
    signature.length !== expected.length ||
    !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
  ) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
  }

  revalidatePath("/", "page");

  return NextResponse.json({ revalidated: true });
}
