'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useDictionary } from '@/components/providers/language-provider';
import { whatsAppLink } from '@/lib/utils';
import { menuCategories } from '@/data/menu';
import { MobileMenu } from './mobile-menu';

type NavItem = {
  key: 'home' | 'menu' | 'about';
  href: string;
  label: string;
  subLinks?: { key: string; href: string; label: string }[];
};

export const Header = () => {
  const { dictionary, setLocale, locale } = useDictionary();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const clearDropdownTimer = () => {
    if (dropdownCloseTimer.current) {
      clearTimeout(dropdownCloseTimer.current);
      dropdownCloseTimer.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (dropdownCloseTimer.current) {
        clearTimeout(dropdownCloseTimer.current);
      }
    };
  }, []);

  const scheduleDropdownClose = () => {
    clearDropdownTimer();
    dropdownCloseTimer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 1000);
  };

  const openDropdown = (key: string) => {
    clearDropdownTimer();
    setActiveDropdown(key);
  };

  const navItems = useMemo<NavItem[]>(() => {
    const menuSubLinks = menuCategories.map((category) => ({
      key: category.key,
      href: `/menu#${category.key}`,
      label: dictionary.menuPage.tabs[category.key as keyof typeof dictionary.menuPage.tabs],
    }));

    return [
      {
        key: 'home',
        href: '/',
        label: dictionary.nav.home,
        subLinks: [
          { key: 'from-chef', href: '/#from-chef', label: dictionary.sections.signature.title },
          { key: 'interior', href: '/#interior', label: dictionary.sections.gallery.title },
        ],
      },
      {
        key: 'menu',
        href: '/menu',
        label: dictionary.nav.menu,
        subLinks: menuSubLinks,
      },
      {
        key: 'about',
        href: '/about',
        label: dictionary.nav.about,
        subLinks: [
          { key: 'team', href: '/about#team', label: dictionary.sections.team.title },
          { key: 'contacts', href: '/about#contacts', label: dictionary.sections.contact.title },
          { key: 'history', href: '/about#history', label: dictionary.sections.history.title },
        ],
      },
    ];
  }, [dictionary]);

  return (
    <header
      className={`fixed left-0 top-0 z-40 w-full transition-all ${
        scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-xl shadow-lg shadow-black/60' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-white">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://i.imgur.com/qyalAmQ.png"
              alt="Black Island logo"
              className="h-12 w-12 object-contain"
            />
          </div>
          <div>
            <p className="font-playfair text-2xl text-white">Black Island</p>
            <p className="text-xs tracking-[0.3em] text-accent">Cafe Restaurant</p>
          </div>
        </Link>
        <nav
          className="relative hidden items-center gap-10 text-sm uppercase tracking-[0.4em] text-white/70 lg:flex"
          onMouseLeave={scheduleDropdownClose}
          onMouseEnter={clearDropdownTimer}
        >
          {navItems.map((item) => (
            <div key={item.key} className="relative">
              <Link
                href={item.href}
                className="hover:text-white"
                onMouseEnter={() => item.subLinks && openDropdown(item.key)}
              >
                {item.label}
              </Link>
              {item.subLinks && (
                <AnimatePresence mode="wait">
                  {activeDropdown === item.key && (
                    <motion.div
                      key={`${item.key}-dropdown`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-0 top-full z-50 mt-4 w-56 rounded-2xl bg-[#111111] p-4 shadow-2xl"
                      onMouseEnter={() => openDropdown(item.key)}
                      onMouseLeave={scheduleDropdownClose}
                    >
                      <div className="flex flex-col gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-white/80">
                        {item.subLinks.map((subLink) => (
                          <Link
                            key={subLink.key}
                            href={subLink.href}
                            className="hover:text-accent"
                            onClick={() => {
                              clearDropdownTimer();
                              setActiveDropdown(null);
                            }}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex gap-2 text-xs uppercase tracking-[0.4em] text-white">
            {['ru', 'en'].map((lng) => (
              <button
                key={lng}
                onClick={() => setLocale(lng as 'ru' | 'en')}
                className={lng === locale ? 'text-accent' : 'text-white/60'}
              >
                {lng}
              </button>
            ))}
          </div>
          <Button
            size="sm"
            onClick={() =>
              window.open(whatsAppLink('Здравствуйте! Хочу забронировать стол в Black Island.'), '_blank')
            }
          >
            {dictionary.nav.booking}
          </Button>
        </div>
        <button className="lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Menu className="h-8 w-8 text-white" />
        </button>
      </div>
      {mounted && (
        <MobileMenu
          open={menuOpen}
          onOpenChange={setMenuOpen}
          links={navItems}
          dictionary={dictionary}
          locale={locale}
          setLocale={setLocale}
        />
      )}
    </header>
  );
};
