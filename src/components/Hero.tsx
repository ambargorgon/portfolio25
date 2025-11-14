import { useTranslation } from "react-i18next";
// import LanyardVercel from "./LanyardVercel.jsx"


const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="h-[100dvh] w-full flex flex-col md:flex-row items-center relative overflow-hidden">
      {/* Lanyard */}
      <div
        className="
    relative z-20 flex justify-center items-start
    w-[300%] h-2/3
    -translate-x-56
    md:w-full md:translate-x-0 md:scale-100 md:h-full 
    md:absolute md:inset-0 md:justify-center 
  "
      >
        {/* <LanyardVercel /> */}
      </div>

      {/* Texto */}
      <div
        className="
      relative z-30 flex flex-col items-center text-center px-6 mb-20
      md:items-start md:text-left md:px-20 md:mb-0
    "
      >
        <h1 className="font-title text-3xl md:text-5xl xl:text-8xl text-[#fff]">
          {t("title")}
        </h1>
        <h6 className="mt-4 font-bold lowercase text-2xl md:text-4xl xl:text-6xl -tracking-widest text-[#fff]">
          {t("subtitle")}
        </h6>
      </div>

      {/* Scroll indicator */}
      {/* mouse */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#2D4A2B] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#2D4A2B] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* flecha */}
     <div className="md:hidden absolute bottom-6 -translate-x-1/2 animate-bounce">
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
