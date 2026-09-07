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
      className="section-blue w-full scroll-mt-24 bg-brand-blue py-20 text-white lg:py-32"
    >
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-white/60">
            Volební noviny
          </p>
          <h2 className="mt-3 text-3xl font-bold uppercase lg:text-5xl">
            Zalistujte si našimi novinami
          </h2>
          <p className="mt-4 text-balance text-white/80 lg:text-lg">
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
