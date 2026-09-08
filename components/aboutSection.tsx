import Button from "@/components/button";
import { Container } from "@/components/layout/container";
import NewspaperCard from "@/components/newspaperCard";

const AboutSection = () => {
  return (
    <section
      id="o-nas"
      className="section-blue relative isolate w-full overflow-hidden bg-brand-blue pt-32 pb-32 text-white sm:pb-40 lg:pt-32 lg:pb-56"
    >
      {/* Skewed blue → white divider into the candidates section below. */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 bg-white sm:h-32 lg:h-48"
        style={{ clipPath: "polygon(0% 100%, 100% 0%, 100% 100%)" }}
      />

      <Container>
        <div className="grid items-start gap-x-12 gap-y-12 lg:grid-cols-2 -mt-20">
          {/* Text column – kept to a single column so the other half is free
              for an image or a CTA card later. */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-white/60">
              O nás
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white lg:text-4xl">
              Sdružení nezávislých kandidátů Oušťáci
            </h2>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-white/85 lg:text-lg">
              <p>
                Jsme <em>nepolitické sdružení</em> složené z&nbsp;občanů města
                Ústí nad&nbsp;Orlicí. Sdružení vzniklo na začátku roku 2010 jako
                protipól politickým stranám a&nbsp;tehdejšímu vedení města.
                V&nbsp;letošním roce budeme do&nbsp;komunálních voleb nominovat
                své kandidáty <em>již popáté</em>.
              </p>
              <p>
                Sdružení vychází z&nbsp;tradičních názorů, které respektují úctu
                ke&nbsp;svobodě jednotlivce a&nbsp;obhajují zásady svobodného
                tržního podnikání. Každý z&nbsp;kandidátů SNK Oušťáci je
                připraven věnovat svůj čas a&nbsp;energii ve&nbsp;prospěch města
                Ústí nad&nbsp;Orlicí.
              </p>
            </div>

            {/* Slogan – the campaign's main claim, on a tilted white card
                like the candidate name plates. */}
            <div className="mt-10 border-t border-white/20 pt-10">
              <p className="text-sm font-bold uppercase tracking-widest text-white/60">
                Letos přicházíme s&nbsp;heslem
              </p>
              <div className="mt-4 inline-block -rotate-2 rounded-2xl bg-white px-6 py-4 shadow-2xl ring-1 ring-black/5">
                <p className="font-display text-4xl font-extrabold uppercase tracking-tight text-brand-blue sm:text-5xl lg:text-6xl">
                  Priority neměníme.
                </p>
              </div>
              <p className="mt-6 text-base leading-relaxed text-white/85 lg:text-lg">
                Je to prosté, stále je nám naše město prioritou. Stále je Ústí
                nad&nbsp;Orlicí naše <em>srdcovka</em> a&nbsp;stále dané sliby
                plníme.
              </p>
            </div>
          </div>

          {/* CTA card – white sibling of the hero's <NavbarCard />. */}
          <NewspaperCard />
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
