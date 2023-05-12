import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

declare module 'i18next' {
    interface CustomTypeOptions {
        returnNull: false;
    }
}

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: "uk",
    debug: false,
    detection: {
        order: ["queryString", "cookie"],
    },
    interpolation: {
        escapeValue: false
    }
})

export default i18n