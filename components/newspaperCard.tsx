import Button from "./button";

// White counterpart to <NavbarCard /> – same card language (rounded, shadow,
// pill eyebrow, watermark, arrow button) but inverted to white with blue text.
const NewspaperCard = () => {
  return (
    <div className="relative grid w-full overflow-hidden rounded-2xl bg-white p-8 text-left shadow-lg lg:p-12">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img/razítko_color.png"
        alt=""
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 -translate-y-4 translate-x-10 object-contain opacity-10"
      />

      <div className="relative flex flex-col gap-4">
        <p className="mb-2 w-fit rounded-full bg-brand-red px-4 py-1 text-sm font-extrabold text-white">
          Volební program
        </p>
        <h3 className="text-3xl font-bold uppercase leading-tight text-brand-blue lg:text-4xl">
          Zalistujte našimi volebními novinami
        </h3>
        <p className="text-balance text-dark/70">
          Najdete v nich kompletní volební program – podrobné plány
          a&nbsp;konkrétní kroky pro rozvoj Ústí nad&nbsp;Orlicí, sepsané tak,
          jak je chceme prosadit.
        </p>

        {/* Newspaper mock-up goes here later. */}
        <div
          aria-hidden
          className="my-2 flex aspect-4/3 w-full items-center justify-center rounded-xl bg-brand-blue/5 text-sm font-medium text-brand-blue/30 ring-1 ring-inset ring-brand-blue/10"
        >
          Volební noviny
        </div>

        <div className="flex justify-start">
          <Button label="Prolistovat volební noviny" href="#program" />
        </div>
      </div>
    </div>
  );
};

export default NewspaperCard;
