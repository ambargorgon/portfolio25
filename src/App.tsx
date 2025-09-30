import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./routes/Home";
import ProjectDetail from "./routes/ProjectDetail";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);

  // Cambiar idioma
  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        setShowHeader(window.scrollY > 0);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setShowHeader(true);
    }
  }, [location.pathname]);

  return (
    <div className="bg-[linear-gradient(104deg,_#b7603b_-0.73%,_#a8af78_43.97%,_#d7c99a_94.33%)] min-h-screen">
      <AnimatePresence>
        {showHeader && (
          <motion.header
            key="header"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#8B6F47]/90 backdrop-blur-md shadow-md"
          >
            <a href="/">
            <h1 className="font-title text-2xl sm:text-3xl md:text-4xl text-white">AG</h1>
            </a>
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 text-sm font-semibold rounded-md bg-[#B27B50] hover:bg-[#d7c99a] transition flex items-center justify-center gap-2"
            >
              <img src="/icons/url.svg" className="w-4" />
              {i18n.language === "es" ? "EN" : "ES"}
            </button>
          </motion.header>
        )}
      </AnimatePresence>
      <main>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
