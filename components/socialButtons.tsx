import Button from "./button";
import { socialLinks } from "@/data/socials";

interface SocialButtonsProps {
  /** Extra classes for the wrapper (e.g. spacing overrides). */
  className?: string;
}

// Renders one square icon button per configured social network. Networks with
// an empty `href` in data/socials.tsx are omitted.
const SocialButtons = ({ className = "" }: SocialButtonsProps) => {
  const links = socialLinks.filter((s) => s.href.trim() !== "");
  if (links.length === 0) return null;

  return (
    <div className={`flex flex-row items-center gap-4 ${className}`}>
      {links.map(({ name, href, Icon }) => (
        <Button
          key={name}
          label={
            <>
              <Icon className="text-2xl" aria-hidden />
              <span className="sr-only">{name}</span>
            </>
          }
          href={href}
          secondary
          square
        />
      ))}
    </div>
  );
};

export default SocialButtons;
