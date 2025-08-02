import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { languages } from '../types/language';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            language === lang.code
              ? 'bg-primary-600 text-white'
              : 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
          }`}
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.code.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;