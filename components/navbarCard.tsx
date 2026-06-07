import { FaRegCalendar, FaRegClock, FaRegMap } from "react-icons/fa";
import Button from "./button";

const NavbarCard = () => {
  return (
    <div className="relative bg-brand-blue w-full grid text-left p-8 lg:p-20 rounded-2xl text-white shadow-lg overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img/razitko_white.png"
        alt="Card background"
        className="absolute bottom-0 right-0 -translate-y-5 translate-x-10 w-80 h-80 object-cover opacity-20"
      />

      <div className="flex flex-col gap-4">
        <p className="text-brand-red bg-white rounded-full w-fit px-4 py-1 mb-2 text-sm font-extrabold">
          Setkání s veřejností
        </p>
        <h2 className="text-3xl lg:text-5xl font-bold uppercase">Oušťáci otevřeně</h2>
        <p className="text-white mb-4 text-balance">
          Přijďte s námi diskutovat o nastaveném směru, rozvoji a o budoucnosti
          města Ústí nad Orlicí. Tématem bude otevřená diskuze nad otázkami jako
          co Vás zajímá, co Vám chybí a co je Vaše téma do budoucnosti?
        </p>
        <div className="">
          <div className="flex flex-row items-center gap-4 mb-2">
            <FaRegCalendar className="text-lg" />
            <p>
              středa <span className="font-bold">17. června 2026</span>
            </p>
          </div>
          <div className="flex flex-row items-center gap-4 mb-2">
            <FaRegClock className="text-lg" />
            <p>
              od <span className="font-bold">18:00</span>
            </p>
          </div>
          <div className="flex flex-row items-center gap-4 mb-2">
            <FaRegMap className="text-lg" />
            <p>
              <span className="font-bold">Malá scéna</span> Ústí nad Orlicí
            </p>
          </div>
        </div>

        <p className="font-black text-balance">
          Jak se Vám žije v Ústí nad Orlicí? Co se Vám na městě líbí a co byste
          chtěli změnit? Vaše pohledy a názory jsou pro nás důležité!
        </p>
        <div className="flex justify-start">
          <Button
            label="Vyplňte nám krátký dotazník"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdRK83pHflV8yfYP3__MVDzT0ZhSuXaqsXgP8CXfkPoTkrxYw/viewform?usp=sharing&ouid=101347946524896647180"
            inverted
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarCard;
