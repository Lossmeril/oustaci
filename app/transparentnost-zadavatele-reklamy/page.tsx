import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Transparentnost zadavatele reklamy | Oušťáci",
  description:
    "Informace o zadavateli a zpracovateli volební reklamy zveřejněné podle zákona.",
};

const TransparencyPage = () => {
  return (
    <main className="min-h-screen w-full bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="text-brand-blue hover:underline">
            <p className="text-sm mb-10">&lt; Zpět na hlavní stránku</p>
          </Link>
          <h1 className="text-3xl font-bold text-balance text-brand-blue lg:text-4xl">
            Transparentnost zadavatele reklamy
          </h1>

          <figure className="mt-8 overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/transparency/transparentnost-reklamy.webp"
              alt="Transparentnost zadavatele reklamy"
              className="block h-auto w-full"
            />
          </figure>
        </div>
      </Container>
    </main>
  );
};

export default TransparencyPage;
