'use client';

import Link from 'next/link';
import { Instagram, Phone, Mail, Binoculars } from 'lucide-react';
import { useDictionary } from '@/components/providers/language-provider';

export const Footer = () => {
  const { dictionary } = useDictionary();
  return (
    <footer className="border-t border-[#111111] bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-playfair text-2xl text-white text-left focus:outline-none"
          >
            Black Island
          </button>
          <p className="text-sm text-white/60">{dictionary.footer.rights}</p>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-accent" />
            <a href="tel:+905539545078">+90 553 954 50 78</a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-accent" />
            <a href="mailto:blackislandantalya@gmail.com">blackislandantalya@gmail.com</a>
          </div>
        </div>
        <div className="flex items-center gap-4 text-accent">
          <span className="text-xs uppercase tracking-[0.3em] text-white/60">{dictionary.footer.socials}</span>
          <Link href="https://www.instagram.com/_blackisland_" className="text-accent" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.tripadvisor.com/Restaurant_Review-g297962-d21410372-Reviews-Black_Island_Cafe_Restaurant-Antalya_Turkish_Mediterranean_Coast.html"
            className="text-accent"
            aria-label="Tripadvisor"
          >
            <Binoculars className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
