import i18n from "i18next";

import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import languageEN from "../locate/en/translate.json";
import languageDE from "../locate/de/translate.json";
import languageFR from "../locate/fr/translate.json";

const initLanguage = () => {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: languageEN,
        de: languageDE,
        fr: languageFR
      },
      /* default language when load the website in browser */
      // lng: "de",
      /* When react i18next not finding any language to as default in borwser */
      fallbackLng: "en",
      /* debugger For Development environment */
      debug: true,
      ns: ["translations"],
      defaultNS: "translations",
      keySeparator: ".",
      interpolation: {
        escapeValue: false,
        formatSeparator: ",",
      } /*
      react: {
        wait: true,
        bindI18n: "languageChanged loaded",
        bindStore: "added removed",
        nsMode: "default",
      },*/,
      detection: {
        // order and from where user language should be detected
        order: [
          "cookie",
          "localStorage",
          "sessionStorage",
          "navigator",
          "htmlTag",
          "path",
          "subdomain",
        ],

        // keys or params to lookup language from
        lookupCookie: "i18next",
        lookupLocalStorage: "i18nextLng",
        lookupSessionStorage: "i18nextLng",
        lookupFromPathIndex: 0,
        lookupFromSubdomainIndex: 0,

        // cache user language on
        caches: ["localStorage", "cookie"],
        excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)
      },
    });

  return i18n;
};

const changeLanguage = (language) => {
  return i18n.changeLanguage(language);
};

const getLanguage = () => {
  return i18n.language;
};

const getSupportedLanguages = () => {
  return i18n.languages;
};

const LanguageService = {
  initLanguage,
  changeLanguage,
  getLanguage,
  getSupportedLanguages,
};

export default LanguageService;
