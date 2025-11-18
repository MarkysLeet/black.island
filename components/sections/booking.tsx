'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { whatsAppLink } from '@/lib/utils';
import { useDictionary } from '@/components/providers/language-provider';

export const BookingSection = () => {
  const { dictionary } = useDictionary();
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl rounded-[40px] border border-[#222222] bg-[#111111] px-10 py-16 text-center shadow-gold">
        <motion.p
          className="text-sm uppercase tracking-[0.5em] text-accent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {dictionary.nav.booking}
        </motion.p>
        <motion.h3
          className="mt-6 font-playfair text-4xl text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {dictionary.sections.booking.title}
        </motion.h3>
        <motion.p
          className="mt-4 text-[#e5e5e5]/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {dictionary.sections.booking.subtitle}
        </motion.p>
        <Button
          size="lg"
          className="mt-10"
          onClick={() => window.open(whatsAppLink('Добрый день! Хочу забронировать стол на сегодня.'), '_blank')}
        >
          {dictionary.sections.booking.cta}
        </Button>
      </div>
    </section>
  );
};
