import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import {EN} from "./EN.ts";
import {RO} from "./RO.ts";
import {DE} from "./DE.ts";
import {CZ} from "./CZ.ts";
import {UA} from "./UA.ts";
import {RU} from "./RU.ts";

export const resources = {
  en: {
    translation: EN,
  },
  ro: {
    translation: RO,
  },
  de: {
    translation: DE,
  },
  cz: {
    translation: CZ,
  },
  ua: {
    translation: UA,
  },
  ru: {
    translation: RU,
  },
};
i18n
  .use(initReactI18next) // подключение React i18next
  .init({
    resources,
    lng: "en", // язык по умолчанию
    fallbackLng: "en", // запасной язык, если перевод для текущего языка отсутствует
    interpolation: {
      escapeValue: false, // отключает экранирование, для работы с JSX
    },
  });

export default i18n;
