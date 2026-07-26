import type { ComponentType } from "react";
import { XIcon, GitHubIcon, ZennIcon } from "@/components/icons/SocialIcons";

/** A single external social account, shared by the profile and contact sections. */
export interface Social {
  name: string;
  url: string;
  Icon: ComponentType<{ className?: string }>;
}

export const socials: Social[] = [
  { name: "X", url: "https://x.com/raihara3", Icon: XIcon },
  { name: "GitHub", url: "https://github.com/raihara3", Icon: GitHubIcon },
  { name: "Zenn", url: "https://zenn.dev/raihara3", Icon: ZennIcon },
];
