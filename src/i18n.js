import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./text/en.json";
import es from "./text/es.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: "es", // idioma inicial
  fallbackLng: "es", // si falta algo en otro idioma
  interpolation: { escapeValue: false },
});

export default i18n;