import Button from "@/components/button";
import CandidatesSection from "@/components/candidates/candidatesSection";
import { Container } from "@/components/layout/container";
import NavbarCard from "@/components/navbarCard";
import { FaInstagram } from "react-icons/fa6";

const HomePage = () => {
  return (
    <main className="w-full min-h-screen">
      <div className="w-full min-h-screen relative pt-24 pb-12 lg:py-40">
        <div className="w-full h-full absolute top-0 left-0 pointer-events-none -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/bg.webp"
            alt="Hero"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="w-full h-full absolute top-0 left-0 pointer-events-none -z-5 bg-white/80 mask-r-from-0 to-100%"></div>

        {/* Decorative slanted visual along the bottom edge – three blend layers
            over the hero image, split from the content by a pure white line.
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
              src="/img/bg.webp"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* 1 – white, hue blend → grayscales the image */}
            <div className="absolute inset-0 bg-white mix-blend-hue" />
            {/* 2 – brand blue, multiply → tints it */}
            <div className="absolute inset-0 bg-brand-blue mix-blend-multiply" />
            {/* 3 – brand blue at ~65% → softens the whole thing */}
            <div className="absolute inset-0 bg-brand-blue/65" />
          </div>
        </div>

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center gap-8 lg:gap-12">
            <div className="w-full flex flex-col items-start justify-center">
              <h1 className="text-brand-blue font-extrabold text-[8rem] tracking-tight sr-only">
                Oušťáci - Sdružení nezávislých kandidátů
              </h1>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/logo-oustaci.png"
                alt="Oušťáci - Sdružení nezávislých kandidátů"
                className="w-56 lg:w-80 mb-6 lg:mb-8"
              />

              <div className="text-black mb-6 lg:mb-8 text-balance space-y-4 text-base lg:text-lg leading-relaxed">
                <p>
                  <em>Sdružení nezávislých kandidátů Oušťáci</em> vede naše
                  město už 16&nbsp;let. Pro letošní říjnové komunální volby
                  přicházíme s <em>omlazenou kandidátkou</em>, která spojuje
                  dosavadní zkušenosti s novou energií.
                </p>
                <p>Kompletní volební program zveřejníme již brzy.</p>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <Button
                  label="Povězte nám svůj názor"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdRK83pHflV8yfYP3__MVDzT0ZhSuXaqsXgP8CXfkPoTkrxYw/viewform?usp=sharing&ouid=101347946524896647180"
                />
                <Button
                  label={<FaInstagram className="text-2xl" />}
                  href="https://instagram.com/snk_oustaci"
                  secondary
                  square
                />
              </div>
            </div>
            <NavbarCard />
          </div>
        </Container>
      </div>

      <CandidatesSection />
    </main>
  );
};

export default HomePage;
