import { Container } from "@/components/layout/container";
import {
  programHeading,
  programPriorities,
  type ProgramItem,
} from "@/data/program";
import ProgramNewspaperCta from "./programNewspaperCta";

/** Skewed red pennant bullet – picks up the site's slant / brand-red accents. */
const Marker = ({ hollow = false }: { hollow?: boolean }) => (
  <span
    aria-hidden="true"
    className={`mt-[0.45em] h-2.5 w-2.5 shrink-0 -skew-x-12 ${
      hollow ? "border-2 border-brand-red bg-transparent" : "bg-brand-red"
    }`}
  />
);

const Item = ({ item }: { item: ProgramItem }) => {
  if (typeof item === "string") {
    return (
      <li className="flex gap-3">
        <Marker />
        <span>{item}</span>
      </li>
    );
  }

  return (
    <li className="flex flex-col gap-2">
      <div className="flex gap-3">
        <Marker />
        <span>{item.text}</span>
      </div>
      <ul className="ml-6 flex flex-col gap-2 text-dark/60">
        {item.children.map((child) => (
          <li key={child} className="flex gap-3">
            <Marker hollow />
            <span>{child}</span>
          </li>
        ))}
      </ul>
    </li>
  );
};

const ProgramSection = () => {
  return (
    <section
      id="program"
      className="relative w-full bg-brand-blue/4 py-20 lg:py-32"
    >
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="inline-block w-fit rounded-full bg-brand-red px-4 py-1 text-sm font-extrabold text-white">
            Volební program
          </p>
          <h2 className="mt-4 text-3xl font-bold uppercase text-brand-blue lg:text-5xl">
            {programHeading}
          </h2>
          <p className="mt-4 text-base text-balance text-dark/70 lg:text-lg">
            Co chceme pro Ústí nad Orlicí prosadit v příštím volebním období –
            oblast po oblasti.
          </p>
        </div>

        {/* Small left inset so the overhanging icon badges of the left column
            line up with the container edge instead of poking past it. */}
        <div className="gap-8 space-y-10 lg:columns-2 lg:pl-4">
          {programPriorities.map((priority) => {
            const Icon = priority.icon;
            return (
              <div
                key={priority.title}
                className="relative mb-10 break-inside-avoid rounded-2xl bg-white p-6 pt-9 shadow-md ring-1 ring-black/5 lg:p-8 lg:pt-10"
              >
                {/* Red icon in a white disc, half-out of the top-left corner. */}
                <span className="absolute -left-4 -top-5 flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand-red shadow-lg ring-1 ring-black/5">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>

                <h3 className="font-display text-lg font-extrabold uppercase tracking-tight text-brand-blue lg:text-xl">
                  {priority.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3 text-sm leading-snug text-dark/75 lg:text-[0.95rem]">
                  {priority.items.map((item, i) => (
                    <Item key={i} item={item} />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>

      <ProgramNewspaperCta />
    </section>
  );
};

export default ProgramSection;
