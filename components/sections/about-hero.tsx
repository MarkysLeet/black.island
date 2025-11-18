'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useDictionary } from '@/components/providers/language-provider';

export const AboutHero = () => {
  const { dictionary } = useDictionary();
  return (
    <motion.div
      className="relative mb-16 overflow-hidden rounded-[40px]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Image
        src="https://i.imgur.com/DJLmZxt.png"
        alt="Команда Black Island"
        width={1600}
        height={900}
        className="h-[60vh] w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30" />
      <div className="absolute bottom-10 left-10 max-w-2xl text-white">
        <p className="text-sm uppercase tracking-[0.4em] text-accent">About</p>
        <h1 className="mt-4 font-playfair text-5xl">Black Island Cafe Restaurant</h1>
        <p className="mt-4 text-lg text-white/80">{dictionary.aboutPage.story}</p>
      </div>
    </motion.div>
  );
};
