'use client';

import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './language-provider';

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </LanguageProvider>
  );
};
