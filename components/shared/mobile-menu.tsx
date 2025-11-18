'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { whatsAppLink } from '@/lib/utils';
import type { Dictionary, Locale } from '@/lib/i18n/dictionary';

interface MobileMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  links: { key: string; href: string; label: string; subLinks?: { key: string; href: string; label: string }[] }[];
  dictionary: Dictionary;
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export const MobileMenu = ({ open, onOpenChange, links, dictionary, locale, setLocale }: MobileMenuProps) => {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <div className="relative flex h-full flex-col gap-10 overflow-y-auto pr-2">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="font-playfair text-2xl text-white"
            >
              Black Island
            </button>
            <div className="flex gap-3">
              {(['ru', 'en'] as Locale[]).map((lng) => (
                <button
                  key={lng}
                  onClick={() => setLocale(lng)}
                  className={`text-sm uppercase tracking-[0.2em] ${
                    locale === lng ? 'text-accent' : 'text-white/60'
                  }`}
                >
                  {lng}
                </button>
              ))}
            </div>
          </div>
          <nav className="space-y-6 text-2xl font-playfair text-white">
            {links.map((link, index) => (
              <motion.div key={link.href} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * index }}>
                <Link href={link.href} onClick={() => onOpenChange(false)} className="block font-normal">
                  {link.label}
                </Link>
                {link.subLinks && (
                  <div className="ml-4 mt-3 space-y-3 text-sm font-light font-inter uppercase tracking-[0.3em] text-white/80">
                    {link.subLinks.map((sub) => (
                      <Link key={sub.key} href={sub.href} onClick={() => onOpenChange(false)} className="block">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </nav>
          <div className="space-y-4 pb-[calc(env(safe-area-inset-bottom)+140px)]" />
          <div className="fixed left-0 right-0 bottom-[calc(env(safe-area-inset-bottom)+24px)] z-[999] w-full max-w-[480px] px-6 mx-auto">
            <div className="space-y-3 rounded-[28px] bg-[#050505]/80 p-4 backdrop-blur">
              <Button
                className="w-full"
                onClick={() => window.open(whatsAppLink('Здравствуйте! Хочу забронировать стол в Black Island.'), '_blank')}
              >
                {dictionary.hero.button}
              </Button>
              <p className="text-center text-sm text-white/60">Konyaaltı • Antalya</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
