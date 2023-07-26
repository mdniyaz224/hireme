import React, { useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ten from './Locals/en/translation.json';
import tde from './Locals/de/translation.json';
import { I18nextProvider } from 'react-i18next';
import Mainrouts from "./Routes/index";
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: ten,
      },
      de: {
        translation: tde,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
const App = () => {
  useEffect(() => {
    let curlen = localStorage.getItem('lang');
    i18n.changeLanguage(curlen || 'en');
  }, []);
  return (
    <>
      
    

      <I18nextProvider i18n={i18n}>
      <Mainrouts />
    </I18nextProvider>
    </>
  );
};

export default App;
