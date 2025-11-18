'use client';

import { useDictionary } from '@/components/providers/language-provider';

export const MenuHeader = () => {
  const { dictionary } = useDictionary();
  return (
    <div className="mb-12 text-center">
      <p className="text-sm uppercase tracking-[0.4em] text-accent">Menu</p>
      <h1 className="font-playfair text-5xl text-white">{dictionary.menuPage.headline}</h1>
      <p className="mt-4 text-lg text-[#e5e5e5]/80">{dictionary.menuPage.description}</p>
    </div>
  );
};
