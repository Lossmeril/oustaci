import React from "react";
import Link from "next/link";
import { webButtonArrow } from "@/data/webGlobals";

// ── Brand color configuration ─────────────────────────────────────────────────
// Each brand has a light and dark shade. Swap full Tailwind class strings here.
// "light" = brand's primary color (e.g. blue), "dark" = neutral/mono (e.g. dark).

const BRAND_1 = {
  light: {
    solid: "bg-blue text-white hover:bg-blue/70",
    solidInverted: "bg-white text-blue hover:bg-white/90",
    ghost: "text-blue hover:text-white",
    ghostInverted: "text-blue hover:text-dark",
  },
  dark: {
    solid: "bg-dark text-white hover:bg-dark/70",
    solidInverted: "bg-white text-dark hover:bg-white/90",
    ghost: "text-white hover:text-white/60",
    ghostInverted: "text-dark hover:text-dark/60",
  },
};

const BRAND_2 = {
  light: {
    solid: "bg-red text-white hover:bg-red/70",
    solidInverted: "bg-white text-red hover:bg-white/90",
    ghost: "text-red hover:text-white",
    ghostInverted: "text-red hover:text-dark",
  },
  dark: {
    solid: "bg-dark text-white hover:bg-dark/70",
    solidInverted: "bg-white text-dark hover:bg-white/90",
    ghost: "text-white hover:text-white/60",
    ghostInverted: "text-dark hover:text-dark/60",
  },
};

// ─────────────────────────────────────────────────────────────────────────────

interface ButtonProps {
  label: string;
  href?: string;
  transparent?: boolean;
  inverted?: boolean;
  monochrome?: boolean;
  secondary?: boolean;
  onClick?: () => void;
}

type StyleVariant = "solid" | "solidInverted" | "ghost" | "ghostInverted";

function resolveClasses({
  transparent,
  inverted,
  monochrome,
  secondary,
}: Pick<
  ButtonProps,
  "transparent" | "inverted" | "monochrome" | "secondary"
>): string {
  const brand = secondary ? BRAND_2 : BRAND_1;
  const shade = monochrome ? brand.dark : brand.light;

  const variant: StyleVariant = transparent
    ? inverted
      ? "ghostInverted"
      : "ghost"
    : inverted
      ? "solidInverted"
      : "solid";

  const padding = transparent ? "px-0" : "px-3.5 py-2.5 shadow-xs";

  return `${shade[variant]} ${padding}`;
}

const BASE =
  "text-md rounded-lg font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue";

const ButtonInside = ({
  label,
  transparent,
  inverted,
  monochrome,
  secondary,
}: Pick<
  ButtonProps,
  "label" | "transparent" | "inverted" | "monochrome" | "secondary"
>) => (
  <div
    className={`${BASE} ${resolveClasses({ transparent, inverted, monochrome, secondary })}`}
  >
    {label + " " + webButtonArrow}
  </div>
);

const Button: React.FC<ButtonProps> = ({
  label,
  href,
  transparent,
  inverted,
  monochrome,
  secondary,
  onClick,
}) => {
  const inside = (
    <ButtonInside
      label={label}
      transparent={transparent}
      inverted={inverted}
      monochrome={monochrome}
      secondary={secondary}
    />
  );

  if (href)
    return (
      <Link href={href} onClick={onClick}>
        {inside}
      </Link>
    );
  if (onClick) return <button onClick={onClick}>{inside}</button>;
  return inside;
};

export default Button;
