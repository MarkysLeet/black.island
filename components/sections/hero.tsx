'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { whatsAppLink } from '@/lib/utils';
import { useDictionary } from '@/components/providers/language-provider';

export const Hero = () => {
  const { dictionary } = useDictionary();
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80"
        alt="Black Island interior"
        fill
        priority
        className="object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
          <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/30">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://i.imgur.com/qyalAmQ.png"
              alt="Black Island logo"
              className="h-24 w-24 object-contain"
            />
          </div>
        </motion.div>
        <motion.h1
          className="mt-8 font-playfair text-5xl text-white sm:text-6xl lg:text-[72px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {dictionary.hero.headline}
        </motion.h1>
        <motion.p
          className="mt-3 font-inter text-2xl text-accent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {dictionary.hero.subline}
        </motion.p>
        <motion.p
          className="mt-4 text-lg text-[#e5e5e5]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {dictionary.hero.cuisine}
        </motion.p>
        <motion.p
          className="mt-2 text-accent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          {dictionary.hero.hours}
        </motion.p>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Button
            size="lg"
            className="text-xl"
            onClick={() => window.open(whatsAppLink('Здравствуйте! Хочу забронировать стол в Black Island.'), '_blank')}
          >
            {dictionary.hero.button}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
