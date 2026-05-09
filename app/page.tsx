import { Container } from "@/components/layout/container";

const HomePage = () => {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div className="w-full h-screen bg-white relative py-40">
        <div className="w-full h-full absolute top-0 left-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/bg-placeholder.jpg"
            alt="Hero"
            className="w-full h-full object-cover opacity-30 blur-xs"
          />
        </div>

        <Container>
          <div className="w-full h-full flex flex-col">
            <h1 className="text-blue font-extrabold text-[8rem] tracking-tight sr-only">
              Oušťáci
            </h1>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/logo-color.png"
              alt="Oušťáci Logo"
              className="w-80 h-auto object-contain mb-6"
            />
            <p className="text-blue font-bold text-2xl">
              Sdružení nezávislých kandidátů
            </p>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default HomePage;
