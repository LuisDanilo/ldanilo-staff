import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import esTranslations from "@/locale/es.json"
import enTranslations from "@/locale/en.json"

i18next.use(initReactI18next).init({
    resources: {
        es: { ...esTranslations },
        en: { ...enTranslations },
    },
    lng: "es"
})