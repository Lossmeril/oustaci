import Button from "@/components/button";
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

              <div className="text-black mb-6 lg:mb-8 text-balance space-y-4 lg:space-y-6 text-base lg:text-lg leading-relaxed">
                <p>
                  <em>Sdružení nezávislých kandidátů Oušťáci </em> stojí v čele
                  našeho města 16&nbsp;let. Za tu dobu se podařilo uskutečnit
                  mnoho projektů, které proměnily podobu Ústí nad Orlicí. Do
                  každé stavby či společenské akce byla vložena energie našeho
                  sdružení.
                </p>
                <p>
                  <em>
                    Ve sdružení jsme si vědomi,že město není nikdy „hotové&rdquo;.
                  </em>{" "}
                  A právě proto připravujeme pro letošní říjnové komunální volby{" "}
                  <em>omlazenou kandidátku</em>, která spojí dosavadní
                  zkušenosti s novou energií, nápady a chutí pracovat pro naše
                  město.
                </p>
                <p>
                  Ve volebním programu{" "}
                  <em>chceme zhodnotit vaše podněty či kritiku</em>. Zajímá nás,
                  co vás těší, co trápí, co vám chybí a co byste si přáli změnit
                  nebo zlepšit. Jsme přesvědčeni, že většině obyvatel není dění
                  ve městě lhostejné, proto je pro nás váš názor důležitý.
                </p>
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
    </main>
  );
};

export default HomePage;
