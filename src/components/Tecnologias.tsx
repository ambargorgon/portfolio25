import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const sections = [
  {
    title: "frontend",
    items: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/next.js.svg" },
      { name: "Typescript", icon: "/icons/typescript.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "TailwindCSS", icon: "/icons/tailwind.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
      { name: "Zustand", icon: "/icons/zustand.svg" },
      { name: "Redux", icon: "/icons/redux.svg" },
    ],
  },
  {
    title: "mobile",
    items: [
      { name: "Expo", icon: "/icons/expo.svg" },
      { name: "React Native", icon: "/icons/react native.svg" },
    ],
  },
  {
    title: "backend",
    items: [
      { name: "Java", icon: "/icons/java.svg" },
      { name: "SpringBoot", icon: "/icons/springboot.svg" },
      { name: "MySQL", icon: "/icons/mysql.svg" },
      { name: "Firebase", icon: "/icons/firebase.svg" },
    ],
  },
  {
    title: "tools",
    items: [
      { name: "Github", icon: "/icons/github.svg" },
      { name: "Postman", icon: "/icons/postman.svg" },
      { name: "Figma", icon: "/icons/figma.svg" },
      { name: "Jira", icon: "/icons/jira.svg" },
      { name: "Vercel", icon: "/icons/vercel.svg" },
      { name: "Notion", icon: "/icons/notion.svg" },
    ],
  },
];

const variants = {
  enter: { opacity: 0, y: 100 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};

const TechCarousel = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % sections.length);
  const prev = () => setIndex((prev) => (prev - 1 + sections.length) % sections.length);

  const startAutoSlide = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(next, isMobile ? 3000 : 2400); // 👈 móvil 1s, pc 2.4s
    }
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Detectar si es mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Autoplay siempre (ahora también en móvil)
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [isMobile]);

  return (
    <>
      <h3 className="w-[90%] border-b-2 font-bold pl-36 mt-16 mb-8 pb-2 text-2xl border-white/50">
        {t("technologies")}
      </h3>

      <div
        className="relative h-[35dvh] md:h-[20dvh] w-full flex flex-col items-center justify-center text-white overflow-visible"
        onMouseEnter={!isMobile ? stopAutoSlide : undefined}
        onMouseLeave={!isMobile ? startAutoSlide : undefined}
      >
        {/* Sección actual */}
        <AnimatePresence mode="wait">
          <motion.div
            key={sections[index].title}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: isMobile ? 1 : 0.6 }} // 👈 duración distinta
            className="absolute flex flex-col items-center justify-center w-full px-4"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-10">
              {sections[index].title}
            </h2>
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
              {sections[index].items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-base md:text-lg hover:scale-110 transition-transform cursor-pointer"
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controles manuales */}
        <div
          className={`
            absolute flex gap-6
            ${isMobile ? "-bottom-6  right-1/2 translate-x-1/2" : "bottom-10 right-40"}
          `}
        >
          <button
            onClick={next}
            className="px-4 py-2 bg-white/30 rounded-full hover:bg-white/20 transition"
          >
            ↓
          </button>
          <button
            onClick={prev}
            className="px-4 py-2 bg-white/30 rounded-full hover:bg-white/20 transition"
          >
            ↑
          </button>
        </div>
      </div>
    </>
  );
};

export default TechCarousel;
