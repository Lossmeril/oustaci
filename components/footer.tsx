import Link from "next/link";

import { Container } from "@/components/layout/container";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full bg-neutral-800 py-8 text-sm text-white/70">
      <Container>
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p>© {year} Sdružení nezávislých kandidátů Oušťáci</p>
          <Link
            href="/transparentnost-zadavatele-reklamy/"
            className="transition hover:text-white"
          >
            Transparentnost zadavatele reklamy
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
