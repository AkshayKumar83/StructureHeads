

import backgroundImage from "../assets/bg.jpeg";

function Hero() {
  return (
    <section
      className="relative min-h-[55vh] md:min-h-[65vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20"></div>

      {/* Desktop */}
      <div className="hidden lg:block absolute top-10 right-20 xl:right-16 2xl:right-24 w-[300px] xl:w-[350px] z-10">
        <p className="italic text-lg leading-8 text-black">
          Structure Heads brings advanced structural design and
          detailing consultancy to Pre-Engineered Buildings. Our
          custom PEB frameworks drastically reduce construction
          timelines and material waste while ensuring strict
          compliance with pan-India engineering standards.
        </p>
      </div>

      {/* Mobile & Tablet */}
      <div className="lg:hidden relative z-10 pt-8 px-6">
        <div className="rounded-lg p-5">
          <p className="italic text-base leading-7 text-black">
            Structure Heads brings advanced structural design and
            detailing consultancy to Pre-Engineered Buildings. Our
            custom PEB frameworks drastically reduce construction
            timelines and material waste while ensuring strict
            compliance with pan-India engineering standards.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;