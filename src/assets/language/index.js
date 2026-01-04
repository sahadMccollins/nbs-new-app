// import i18next from "i18next";
// import { initReactI18next } from "react-i18next";
// import en from "./en.json";
// import hi from "./hi.json";
// import ar from "./ar.json";
// // import kr from "./kr.json";
// import fr from './fr.json';

// i18next.use(initReactI18next).init({
//     lng: 'en',
//     resources: {
//         en: en,
//         hi: hi,
//         ar: ar,
//         // kr: kr,
//         fr: fr,
//     },
// });

// export default i18next;

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
// import hi from './hi.json';
import ar from './ar.json';
import fr from './fr.json';
import { getValue } from '@utils/localStorage';

const initI18n = async () => {
    const savedLang = await getValue('language'); // 👈 stored lang
    const defaultLang = savedLang || 'en';

    i18next.use(initReactI18next).init({
        lng: defaultLang,
        fallbackLng: 'en',
        resources: {
            en,
            // hi,
            ar,
            fr,
        },
        interpolation: {
            escapeValue: false,
        },
    });
};

initI18n();

export default i18next;
