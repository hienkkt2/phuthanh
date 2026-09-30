import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { translations, Translations } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof Translations) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('phuthanh_language');
      if (saved === 'vi' || saved === 'en') {
        return saved;
      }
      // If browser language is not Vietnamese, default to Vietnamese or auto-detect
      const navLang = navigator.language.toLowerCase();
      if (navLang.startsWith('en')) {
        return 'en';
      }
    } catch {
      // Fallback
    }
    return 'vi';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('phuthanh_language', lang);
      document.documentElement.lang = lang;
    } catch {
      // Ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: keyof Translations): string => {
    const langDict = translations[language] || translations.vi;
    return langDict[key] || translations.vi[key] || String(key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
