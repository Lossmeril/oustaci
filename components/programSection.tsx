import { Container } from "@/components/layout/container";
import {
  programHeading,
  programPriorities,
  type ProgramItem,
} from "@/data/program";
import ProgramNewspaperCta from "./programNewspaperCta";

/** Little skewed pennant used as the bullet marker – echoes the site's slant. */
const Marker = ({ hollow = false }: { hollow?: boolean }) => (
  <span
    aria-hidden="true"
    className={`mt-[0.4em] h-2.5 w-2.5 shrink-0 -skew-x-12 ${
      hollow ? "border-2 border-brand-blue bg-transparent" : "bg-brand-blue"
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
        <div className="mb-14 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-blue/60">
            Volební program
          </p>
          <h2 className="mt-3 text-3xl font-bold uppercase text-brand-blue lg:text-5xl">
            {programHeading}
          </h2>
          <p className="mt-4 text-base text-balance text-dark/70 lg:text-lg">
            Co chceme pro Ústí nad Orlicí prosadit v příštím volebním období –
            oblast po oblasti.
          </p>
        </div>

        <div className="gap-6 space-y-6 lg:columns-2 lg:gap-8 lg:space-y-8">
          {programPriorities.map((priority) => {
            const Icon = priority.icon;
            return (
              <div
                key={priority.title}
                className="break-inside-avoid rounded-2xl bg-white p-6 shadow-sm lg:p-8"
              >
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
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
