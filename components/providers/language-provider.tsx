'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { dictionaries, type Dictionary, type Locale, defaultLocale } from '@/lib/i18n/dictionary';

interface LanguageContextValue {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem('black-island-locale') as Locale | null;
    if (stored && stored !== locale) {
      setLocale(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('black-island-locale', locale);
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, dictionary: dictionaries[locale], setLocale }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useDictionary = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useDictionary must be used within LanguageProvider');
  return context;
};
