import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enCommon from '@shared/i18n/locales/en/common.json';
import nbCommon from '@shared/i18n/locales/nb/common.json';
import enMenu from '@shared/i18n/locales/en/menu.json';
import nbMenu from '@shared/i18n/locales/nb/menu.json';
import enTasks from '@shared/i18n/locales/en/tasks.json';
import nbTasks from '@shared/i18n/locales/nb/tasks.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        common: enCommon,
        menu: enMenu,
        tasks: enTasks
      },
      nb: {
        common: nbCommon,
        menu: nbMenu,
        tasks: nbTasks
      }
    },
    defaultNS: 'common',
    ns: ['common', 'menu', 'tasks']
  });

export default i18n;
