import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

const Languages = ['pt', 'en']

export default i18n
  .use(Backend) // it identifies the user input language
  .use(LanguageDetector) // passing the i18n instance to the module of react-i18next
  .use(initReactI18next) // instantiation of i18next
  .init({
    fallbackLng: 'en', // default language will be English
    debug: false,
    /**
     * TODO: [debug] Depois, colocar uma env pra validar se o ambiente é dev, senão deixa false
     */
    supportedLngs: Languages,
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
      /**
       * [useSuspense] tive que adicionar isso no Next,
       * porque ele dá erro no Suspense (mesmo que eu não esteja usando)
       */
    }
  })
