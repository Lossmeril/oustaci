import type { IconType } from "react-icons";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

export type SocialLink = {
  name: string;
  href: string;
  Icon: IconType;
};

/**
 * Social profiles shown across the site (navbar + hero) via <SocialButtons />.
 * To add the Facebook page, just fill in its `href` below – any entry with an
 * empty `href` is skipped, so a new network is a one-line change here.
 */
export const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://instagram.com/snk_oustaci",
    Icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/Oustaci.cz/", // ← doplňte odkaz na facebookovou stránku
    Icon: FaFacebookF,
  },
];
