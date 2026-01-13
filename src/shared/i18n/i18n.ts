import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enCommon from '@shared/i18n/locales/en/common.json';
import nbCommon from '@shared/i18n/locales/nb/common.json';
import enError from '@shared/i18n/locales/en/error.json';
import nbError from '@shared/i18n/locales/nb/error.json';
import enMenu from '@shared/i18n/locales/en/menu.json';
import nbMenu from '@shared/i18n/locales/nb/menu.json';
import enTasks from '@shared/i18n/locales/en/tasks.json';
import nbTasks from '@shared/i18n/locales/nb/tasks.json';
import enOrders from '@shared/i18n/locales/en/orders.json';
import nbOrders from '@shared/i18n/locales/nb/orders.json';

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
        error: enError,
        menu: enMenu,
        tasks: enTasks,
        orders: enOrders
       
      },
      nb: {
        common: nbCommon,
        error: nbError,
        menu: nbMenu,
        tasks: nbTasks,
        orders: nbOrders
        
      }
    },
    defaultNS: 'common',
    ns: ['common', 'error', 'menu', 'tasks', 'orders']
  });

export default i18n;
