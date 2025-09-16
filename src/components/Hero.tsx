import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();

  // Función para alternar idioma
  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="h-[100dvh] w-full flex flex-col justify-center items-center gap-6 relative">
      {/* Header con botón de idioma */}
      <header className="absolute top-4 right-4 flex items-center gap-2">
        <button
          onClick={toggleLanguage}
          className="px-3 py-1 text-sm font-semibold rounded-md bg-[#8B6F47] text-white hover:bg-[#2D4A2B] transition"
        >
          {i18n.language === "es" ? "EN" : "ES"}
        </button>
      </header>

      {/* Título principal */}
      <h1 className="font-title z-10 text-center py-8 mt-16 text-3xl md:text-5xl xl:text-7xl xl:mt-20">
        {t("title")}
      </h1>
      <div className="absolute z-0 bg-gradient-to-r from-[#BDBB87] via-[#A9A974] to-[#B17E53] w-full mr-[30%] h-36"></div>

      {/* Subtítulo */}
      <h6 className="font-bold lowercase text-2xl md:text-4xl xl:text-5xl -tracking-widest text-center md:text-right md:self-end md:mr-12 xl:mr-24">
        {t("subtitle")}
      </h6>

      {/* Scroll indicator */}
      {/* Versión "mouse" → solo visible en pantallas medianas y grandes */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#2D4A2B] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#2D4A2B] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Versión "flecha" → solo visible en pantallas pequeñas */}
      <div className="md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
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
