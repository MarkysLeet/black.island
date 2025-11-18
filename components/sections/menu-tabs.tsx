'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { menuItems, menuCategories, type MenuCategory } from '@/data/menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { whatsAppLink } from '@/lib/utils';
import { useDictionary } from '@/components/providers/language-provider';

const categories: MenuCategory[] = menuCategories.map((category) => category.key);

export const MenuTabs = () => {
  const { dictionary } = useDictionary();
  const [active, setActive] = useState<MenuCategory>('appetizers');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleHash = () => {
      if (typeof window === 'undefined') return;
      const hash = window.location.hash.replace('#', '') as MenuCategory;
      if (categories.includes(hash)) {
        setActive(hash);
        requestAnimationFrame(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const handleClick = (event: MouseEvent) => {
      if (!dropdownOpen) return;
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [dropdownOpen]);

  const tabs = useMemo(
    () => [
      { key: 'appetizers', label: dictionary.menuPage.tabs.appetizers },
      { key: 'soups', label: dictionary.menuPage.tabs.soups },
      { key: 'russian', label: dictionary.menuPage.tabs.russian },
      { key: 'mediterranean', label: dictionary.menuPage.tabs.mediterranean },
      { key: 'desserts', label: dictionary.menuPage.tabs.desserts },
      { key: 'drinks', label: dictionary.menuPage.tabs.drinks },
    ],
    [dictionary]
  );

  const selectCategory = (category: MenuCategory) => {
    setActive(category);
    setDropdownOpen(false);
  };

  const currentLabel = tabs.find((tab) => tab.key === active)?.label ?? '';

  return (
    <Tabs value={active} onValueChange={(value) => selectCategory(value as MenuCategory)}>
      <TabsList className="hidden w-full flex-wrap justify-center gap-3 sm:gap-4 lg:flex lg:flex-nowrap lg:justify-between">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.key}
            value={tab.key}
            className="flex-auto basis-full whitespace-normal text-sm leading-tight sm:basis-[calc(50%-0.75rem)] lg:flex-1 lg:basis-auto"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="mt-6 flex justify-center lg:hidden">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.35em] text-white"
          >
            {currentLabel}
            <ChevronDown className="h-4 w-4 text-accent" />
          </button>
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-1/2 z-30 mt-3 w-56 -translate-x-1/2 rounded-2xl bg-[#111111] p-4 shadow-2xl"
              >
                <div className="flex flex-col gap-2 text-[0.65rem] uppercase tracking-[0.35em] text-white/80">
                  {tabs.map((tab) => (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => selectCategory(tab.key as MenuCategory)}
                      className={`text-left transition-colors hover:text-accent ${tab.key === active ? 'text-accent' : ''}`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {categories.map((category) => (
        <TabsContent value={category} key={category} className="p-0">
          <AnimatePresence mode="wait">
            {active === category && (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div id={category} className="-mt-32 h-32 w-px opacity-0" aria-hidden="true" />
                <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
                  {menuItems
                    .filter((item) => item.category === category)
                    .map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="card-gold overflow-hidden rounded-[32px]"
                      >
                        <div className="relative h-64 w-full overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                            className="object-cover"
                          />
                        </div>
                        <div className="space-y-4 p-6">
                          <div>
                            <h3 className="font-playfair text-3xl italic text-white">{item.title}</h3>
                            <p className="mt-2 text-sm text-[#e5e5e5]/80">{item.description}</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-semibold text-accent">{item.price}</span>
                            <Button
                              size="sm"
                              onClick={() => window.open(whatsAppLink(`Здравствуйте! Хочу заказать ${item.title}.`), '_blank')}
                            >
                              {dictionary.buttons.order}
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </TabsContent>
      ))}
    </Tabs>
  );
};
