import React from "react";
import Link from "next/link";
import { webButtonArrow } from "@/data/webGlobals";

// ── Brand color configuration ─────────────────────────────────────────────────
// Each brand has a light and dark shade. Swap full Tailwind class strings here.
// "light" = brand's primary color (e.g. blue), "dark" = neutral/mono (e.g. dark).

const BRAND_1 = {
  light: {
    solid: "bg-brand-blue text-white hover:bg-brand-blue/70",
    solidInverted: "bg-white text-brand-blue hover:bg-white/90",
    ghost: "text-brand-blue hover:text-white",
    ghostInverted: "text-brand-blue hover:text-dark",
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
    solid: "bg-brand-red text-white hover:bg-brand-red/70",
    solidInverted: "bg-white text-brand-red hover:bg-white/90",
    ghost: "text-brand-red hover:text-white",
    ghostInverted: "text-brand-red hover:text-dark",
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
  label: string | React.ReactNode;
  href?: string;
  transparent?: boolean;
  inverted?: boolean;
  monochrome?: boolean;
  secondary?: boolean;
  square?: boolean;
  onClick?: () => void;
}

type StyleVariant = "solid" | "solidInverted" | "ghost" | "ghostInverted";

function resolveClasses({
  transparent,
  inverted,
  monochrome,
  secondary,
  square,
}: Pick<
  ButtonProps,
  "transparent" | "inverted" | "monochrome" | "secondary" | "square"
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

  const padding = square ? "p-2.5" : transparent ? "px-0" : "px-3.5 py-2.5 shadow-xs";

  return `${shade[variant]} ${padding}`;
}

const BASE =
  "text-md rounded-md font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue";

const ButtonInside = ({
  label,
  transparent,
  inverted,
  monochrome,
  secondary,
  square,
}: Pick<
  ButtonProps,
  "label" | "transparent" | "inverted" | "monochrome" | "secondary" | "square"
>) => (
  <div
    className={`${BASE} ${resolveClasses({ transparent, inverted, monochrome, secondary, square })}${square ? " flex items-center justify-center aspect-square" : ""}`}
  >
    {square ? label : <>{label}{" "}{webButtonArrow}</>}
  </div>
);

const Button: React.FC<ButtonProps> = ({
  label,
  href,
  transparent,
  inverted,
  monochrome,
  secondary,
  square,
  onClick,
}) => {
  const inside = (
    <ButtonInside
      label={label}
      transparent={transparent}
      inverted={inverted}
      monochrome={monochrome}
      secondary={secondary}
      square={square}
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
