import type { ComponentType } from "react";
import {
  XIcon,
  WantedlyIcon,
  YoutrustIcon,
  GitHubIcon,
} from "@/components/icons/SocialIcons";

/** A single external social account, shared by the profile and contact sections. */
export interface Social {
  name: string;
  url: string;
  Icon: ComponentType<{ className?: string }>;
}

export const socials: Social[] = [
  { name: "X", url: "https://x.com/raihara3", Icon: XIcon },
  {
    name: "Wantedly",
    url: "https://www.wantedly.com/id/ryu_aihara",
    Icon: WantedlyIcon,
  },
  {
    name: "YOUTRUST",
    url: "https://youtrust.jp/users/aihara_ryu",
    Icon: YoutrustIcon,
  },
  { name: "GitHub", url: "https://github.com/raihara3", Icon: GitHubIcon },
];
