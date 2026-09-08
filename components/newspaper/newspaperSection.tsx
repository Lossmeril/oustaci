import { readdirSync } from "node:fs";
import { join } from "node:path";

import { Container } from "@/components/layout/container";
import NewspaperFlipbook from "./newspaperFlipbook";

// Assets live in /public/noviny – one WebP per page (page-01.webp, page-02.webp,
// …) plus one .pdf for the download button. They're picked up automatically and
// sorted by name, numeric-aware.
const ASSET_DIR = "public/noviny";

const listAssets = (): { pages: string[]; pdfHref: string | null } => {
  try {
    const files = readdirSync(join(process.cwd(), ASSET_DIR));
    const pages = files
      .filter((f) => /\.(webp|png|jpe?g|avif)$/i.test(f))
      .sort((a, b) => a.localeCompare(b, "cs", { numeric: true }))
      .map((f) => `/noviny/${encodeURIComponent(f)}`);
    const pdf = files.find((f) => /\.pdf$/i.test(f));
    return { pages, pdfHref: pdf ? `/noviny/${encodeURIComponent(pdf)}` : null };
  } catch {
    return { pages: [], pdfHref: null };
  }
};

const NewspaperSection = () => {
  const { pages, pdfHref } = listAssets();

  return (
    <section
      id="noviny"
      className="section-blue relative isolate w-full scroll-mt-24 overflow-hidden bg-brand-blue pb-20 pt-32 text-white sm:pt-40 lg:pb-32 lg:pt-52"
    >
      {/* Skewed transition from the light programme section into the blue –
          same brand-blue/4 as the section above, so the blue just reads as
          having a slanted top edge. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-28 bg-brand-blue/4 sm:h-40 lg:h-56"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />

      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-white/60">
            Volební noviny
          </p>
          <h2 className="mt-3 text-3xl font-bold uppercase lg:text-5xl">
            Zalistujte si našimi novinami
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-white/80 lg:text-lg">
            Kompletní program a všechna data přehledně na jednom místě. Listujte
            přímo tady, nebo si noviny stáhněte v&nbsp;PDF.
          </p>
        </div>

        <NewspaperFlipbook pages={pages} pdfHref={pdfHref} />
      </Container>
    </section>
  );
};

export default NewspaperSection;
