import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import hi from "./hi.json";
import ar from "./ar.json";
import kr from "./kr.json";

i18next.use(initReactI18next).init({
    lng: 'en',
    resources: {
        en: en,
        hi: hi,
        ar: ar,
        kr: kr,
    },
});

export default i18next;