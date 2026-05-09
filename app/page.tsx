import Button from "@/components/button";
import { Container } from "@/components/layout/container";

const HomePage = () => {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div className="w-full h-screen relative py-40">
        <div className="w-full h-full absolute top-0 left-0 pointer-events-none -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/bg-placeholder.jpg"
            alt="Hero"
            className="w-full h-full object-cover opacity-20 blur-xs"
          />
        </div>

        <div className="w-full h-full absolute top-0 left-0 pointer-events-none -z-5 bg-white/50 mask-r-from-0 to-100%"></div>

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full items-center gap-12">
            <div className="w-full h-full flex flex-col">
              <h1 className="text-blue font-extrabold text-[8rem] tracking-tight sr-only">
                Oušťáci - Sdružení nezávislých kandidátů
              </h1>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/logo-color.png"
                alt="Oušťáci Logo"
                className="w-120 h-auto object-contain mb-6"
              />
              <p className="text-lg text-dark/80 mb-12 text-balance">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris
                tincidunt sem sed arcu. Integer vulputate sem a nibh rutrum
                consequat. Nullam rhoncus aliquam metus. Duis ante orci,
                molestie vitae vehicula venenatis, tincidunt ac pede. Nullam sit
                amet magna in magna gravida vehicula.
              </p>
              <div className="flex flex-row gap-8">
                <Button label="Více informací" href="#o-nas" />
                <Button label="Kontakt" href="#kontakt" inverted />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default HomePage;
