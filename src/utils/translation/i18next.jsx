import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import languageResources from "./resources";

i18next.use(LanguageDetector).use(initReactI18next).init({
	fallbackLng: "en",
	resources: languageResources,
});

//console.log("Detected language: ", i18next.language);
//console.log(LanguageDetector);

export default i18next;
