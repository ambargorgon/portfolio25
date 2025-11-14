import { useTranslation } from "react-i18next";
import Particles from "./Particles";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="h-[100dvh] w-full relative overflow-hidden flex flex-col md:flex-row items-center">

      {/* Particles as background */}
      <div className="absolute inset-0 z-10">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={400}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Text */}
      <div
        className="
          relative z-30 
          flex flex-col items-center text-center justify-center
          px-6 h-full
          md:items-start md:text-left md:px-20
          pointer-events-none
          "
      >
        <h1 className="font-title text-5xl md:text-5xl xl:text-8xl text-[#fff] leading-snug sm:text-center">
          {t("title")}
        </h1>

        <h6 className="mt-4 font-bold lowercase text-2xl md:text-4xl xl:text-6xl -tracking-widest text-[#fff]">
          {t("subtitle")}
        </h6>
      </div>

      {/* Scroll indicator desktop */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 z-30 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#2D4A2B] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#2D4A2B] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Scroll indicator mobile */}
      <div className="md:hidden absolute bottom-6 left-1/2 z-30 -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-[#2D4A2B]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

    </div>
  );
};

export default Hero;
