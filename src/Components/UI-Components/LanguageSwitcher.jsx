// LanguageSwitcher.js
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('lang', selectedLanguage);
  };

  return (
    <select onChange={changeLanguage} value={i18n.language} className='lng-cng'>
      <option value="en">English</option>
      <option value="de">Dech</option>
    </select>
  );
};

export default LanguageSwitcher;
