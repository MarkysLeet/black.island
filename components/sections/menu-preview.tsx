'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { menuItems } from '@/data/menu';
import { Card } from '@/components/ui/card';
import { useDictionary } from '@/components/providers/language-provider';

export const MenuPreview = () => {
  const { dictionary } = useDictionary();
  const featured = menuItems.slice(0, 6);
  return (
    <section id="from-chef" className="bg-[#0a0a0a] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-4 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-accent">Signature</p>
          <h2 className="font-playfair text-4xl text-white">{dictionary.sections.signature.title}</h2>
          <p className="text-[#e5e5e5]/80">{dictionary.sections.signature.subtitle}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, index) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
              <Card className="overflow-hidden p-0">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="space-y-2 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-playfair text-2xl text-white">{item.title}</h3>
                    <span className="text-xl font-semibold text-accent">{item.price}</span>
                  </div>
                  <p className="text-sm text-[#e5e5e5]/80">{item.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
