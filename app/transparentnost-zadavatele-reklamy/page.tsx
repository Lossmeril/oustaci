import type { Metadata } from "next";
import { readdirSync } from "node:fs";
import { join } from "node:path";

import { Container } from "@/components/layout/container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Transparentnost zadavatele reklamy | Oušťáci",
  description:
    "Informace o zadavateli a zpracovateli volební reklamy zveřejněné podle zákona.",
};

const TRANSPARENCY_DIR = "public/img/transparency";

/** All image files in the transparency folder, in a stable order. */
const images = readdirSync(join(process.cwd(), TRANSPARENCY_DIR))
  .filter((f) => /\.(webp|png|jpe?g|avif|gif)$/i.test(f))
  .sort((a, b) => a.localeCompare(b, "cs"));

/** Turn a file name into a readable caption. */
const caption = (file: string) => {
  const name = file
    .replace(/\.[^.]+$/, "")
    .replace(/^transparentnost\s*-\s*/i, "")
    .replace(/[-_]+/g, " ")
    .trim();
  return name.charAt(0).toUpperCase() + name.slice(1);
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

          <div className="mt-8 space-y-10">
            {images.map((file) => (
              <figure
                key={file}
                className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/img/transparency/${encodeURIComponent(file)}`}
                  alt={caption(file)}
                  className="block h-auto w-full"
                />
                <figcaption className="bg-white px-4 py-3 text-sm text-dark/60">
                  {caption(file)}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default TransparencyPage;
