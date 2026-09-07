import AboutSection from "@/components/aboutSection";
import Button from "@/components/button";
import CandidatesSection from "@/components/candidates/candidatesSection";
import { Container } from "@/components/layout/container";

import ProgramSection from "@/components/programSection";
import NewspaperSection from "@/components/newspaper/newspaperSection";
import SocialButtons from "@/components/socialButtons";

const HomePage = () => {
  return (
    <main className="w-full min-h-screen">
      <div className="w-full min-h-screen relative flex flex-col justify-end">
        <div className="w-full h-full absolute top-0 left-0 pointer-events-none -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/skupina 9.jpg"
            alt="Hero"
            className="w-full h-full object-cover opacity-100 object-top"
          />
        </div>

        <div className="w-full h-full absolute top-0 left-0 pointer-events-none -z-5 bg-white/60 mask-r-from-0 to-100%"></div>

        {/* Decorative slanted visual along the bottom edge – three blend layers
            over the hero image, split from the content by a pure white line.
            The tinted band then dissolves into flat brand-blue so the hero
            runs seamlessly into the blue "O nás" section.
            --band: height on the tall (right) side, --slant: extra drop on the
            left, --line: thickness of the white divider. */}
        <div className="pointer-events-none absolute inset-0 z-[-1] [--band:8rem] [--line:3px] [--slant:2.5rem] sm:[--band:12rem] lg:[--band:20rem] lg:[--line:20px] lg:[--slant:8rem]">
          {/* Pure white divider – the full slanted shape */}
          <div
            className="absolute inset-0 bg-white"
            style={{
              clipPath:
                "polygon(0% calc(100% - var(--band) + var(--slant)), 100% calc(100% - var(--band)), 100% 100%, 0% 100%)",
            }}
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/razitko-3-white.svg"
            alt=""
            className="absolute w-60 h-60 bottom-8 right-8 z-20"
          />

          {/* Treatment, nudged down by --line so the white edge shows */}
          <div
            className="absolute inset-0 isolate"
            style={{
              clipPath:
                "polygon(0% calc(100% - var(--band) + var(--slant) + var(--line)), 100% calc(100% - var(--band) + var(--line)), 100% 100%, 0% 100%)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/skupina 9.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            {/* 1 – white, hue blend → grayscales the image */}
            <div className="absolute inset-0 bg-white mix-blend-hue" />
            {/* 2 – brand blue, multiply → tints it */}
            <div className="absolute inset-0 bg-brand-blue mix-blend-multiply" />
            {/* 3 – brand blue at ~65% → softens the whole thing */}
            <div className="absolute inset-0 bg-brand-blue/65" />
            {/* 4 – flat brand blue over the band region, ramping from clear
                just below the white line to solid at the edge, so the tinted
                image dissolves into the flat blue of the section below */}
            <div className="absolute inset-x-0 bottom-0 h-[calc(var(--band)+var(--slant))] bg-brand-blue mask-[linear-gradient(to_bottom,transparent,transparent_30%,#000_85%)]" />
          </div>
        </div>

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center gap-8 lg:gap-12 mb-20">
            {/* Text + CTA live in a solid white card so they stay legible over
                the candidate photo behind the hero. */}
            <div className="relative w-full overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5 lg:p-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/razítko_color.png"
                alt=""
                className="pointer-events-none absolute top-0 right-0 h-72 w-72 translate-x-10 translate-y-2 object-contain opacity-10"
              />

              <div className="relative flex flex-col items-start">
                <h1 className="text-brand-blue font-extrabold text-[8rem] tracking-tight sr-only">
                  Oušťáci - Sdružení nezávislých kandidátů
                </h1>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {/* <img
                  src="/img/oustaci_logo.svg"
                  alt="Oušťáci - Sdružení nezávislých kandidátů"
                  className="w-44 lg:w-56 mb-10"
                /> */}

                <p className="mt-4 font-display text-lg font-extrabold uppercase leading-[1.05] tracking-tight text-brand-blue lg:text-5xl">
                  Priority neměníme.
                </p>
                <p className="mt-4 font-display text-lg font-extrabold leading-[1.05] tracking-tight text-black/80 lg:text-2xl">
                  Čtvero volebních období.
                  <br className="hidden sm:block" /> Jeden společný cíl.
                </p>

                <p className="mt-5 text-balance text-base leading-relaxed text-dark/70 lg:text-sm">
                  Každé roční období má svůj význam – jaro přináší nové začátky,
                  léto růst, podzim zkušenosti a&nbsp;bilancování, zima přípravu
                  na nové záměry. Stejně vnímáme i&nbsp;šestnáct let, po která
                  SNK Oušťáci vedou Ústí nad&nbsp;Orlicí.
                </p>

                <p className="mt-7 text-balance font-semibold text-dark lg:text-sm">
                  V&nbsp;říjnu jdeme do pátého období – s&nbsp;omlazenou
                  kandidátkou a&nbsp;stejnými prioritami.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Button label="Naši kandidáti" href="#kandidati" />
                  <Button label="Volební program" href="#program" secondary />
                  <SocialButtons />
                </div>
              </div>
            </div>

            {/* Right column left open – the candidate photo shows through here. */}
          </div>
        </Container>
      </div>

      <AboutSection />

      <CandidatesSection />

      <ProgramSection />

      <NewspaperSection />
    </main>
  );
};

export default HomePage;
