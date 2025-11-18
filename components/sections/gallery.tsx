'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { galleryImages } from '@/data/gallery';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useDictionary } from '@/components/providers/language-provider';

export const GallerySection = () => {
  const { dictionary } = useDictionary();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="interior" className="bg-[#0a0a0a] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-4 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-accent">Interior</p>
          <h2 className="font-playfair text-4xl text-white">{dictionary.sections.gallery.title}</h2>
          <p className="text-[#e5e5e5]/80">{dictionary.sections.gallery.subtitle}</p>
        </div>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.id}
              className="mb-4 block w-full"
              style={{ breakInside: 'avoid' }}
              onClick={() => setSelected(image.image)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl">
                <Image
                  src={image.image}
                  alt={image.title}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className="aspect-square rounded-3xl object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent>
          {selected && (
            <div className="relative h-[70vh] w-full">
              <Image src={selected} alt="Gallery item" fill className="rounded-2xl object-cover" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
