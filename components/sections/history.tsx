'use client';

import { motion } from 'framer-motion';
import { useDictionary } from '@/components/providers/language-provider';

export const HistorySection = () => {
  const { dictionary } = useDictionary();
  return (
    <motion.section
      id="history"
      className="py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-4xl space-y-6 px-6 text-lg text-[#e5e5e5]/90">
        <h2 className="font-playfair text-4xl text-white">{dictionary.sections.history.title}</h2>
        {dictionary.sections.history.paragraphs.map((paragraph, index) => (
          <p key={index} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </motion.section>
  );
};
