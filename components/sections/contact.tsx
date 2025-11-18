'use client';

import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDictionary } from '@/components/providers/language-provider';

const mapsLink = 'https://maps.app.goo.gl/CrnMoK5aAU5xq8Ci7';

export const ContactSection = () => {
  const { dictionary, locale } = useDictionary();
  const isRu = locale === 'ru';
  const labels = {
    email: isRu ? 'Почта' : 'Email',
    phone: isRu ? 'Телефон' : 'Phone',
    hours: isRu ? 'Время работы' : 'Hours',
    address: isRu ? 'Адрес' : 'Address',
  };

  const contactDetails = [
    {
      key: 'email',
      label: labels.email,
      value: dictionary.sections.contact.email,
      icon: Mail,
      href: `mailto:${dictionary.sections.contact.email}`,
    },
    {
      key: 'phone',
      label: labels.phone,
      value: dictionary.sections.contact.phone,
      icon: Phone,
      href: `tel:${dictionary.sections.contact.phone.replace(/\s+/g, '')}`,
    },
    {
      key: 'hours',
      label: labels.hours,
      value: '10:00 – 00:00',
      icon: Clock,
    },
  ];

  return (
    <motion.section
      id="contacts"
      className="py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-accent">Contact</p>
          <h2 className="mt-4 font-playfair text-4xl text-white">{dictionary.sections.contact.title}</h2>
          <p className="mt-2 text-[#e5e5e5]/80">{dictionary.sections.contact.subtitle}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {contactDetails.map((detail) => {
            const Icon = detail.icon;

            if (detail.href) {
              return (
                <a
                  key={detail.key}
                  href={detail.href}
                  className="card-gold block rounded-[30px] p-8 text-center text-white transition-colors hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:text-left"
                >
                  <div className="flex items-center justify-center gap-3 text-accent md:justify-start">
                    <Icon />
                    <span>{detail.label}</span>
                  </div>
                  <p className="mt-4 text-lg text-white">{detail.value}</p>
                </a>
              );
            }

            return (
              <div
                key={detail.key}
                className="card-gold rounded-[30px] p-8 text-center text-white md:text-left"
              >
                <div className="flex items-center justify-center gap-3 text-accent md:justify-start">
                  <Icon />
                  <span>{detail.label}</span>
                </div>
                <p className="mt-4 text-lg text-white">{detail.value}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[2fr,1fr]">
          <div className="overflow-hidden rounded-[30px]">
            <iframe
              title="Black Island Map"
              src="https://www.google.com/maps?q=Liman%2C%20Bo%C4%9Fa%C3%A7ay%20Cd.%20Yasemin%20Apartman%C4%B1%20No%3A17%20%2F%20B%20D%3A1%2C%2007130%20Konyaalt%C4%B1%2FAntalya&output=embed"
              width="100%"
              height="500"
              className="w-full border-0"
              style={{ filter: 'grayscale(100%) contrast(120%) opacity(0.8)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="card-gold rounded-[30px] p-8 text-center text-white md:text-left">
            <div className="flex items-center justify-center gap-3 text-accent md:justify-start">
              <MapPin />
              <span>{labels.address}</span>
            </div>
            <a
              href={mapsLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block whitespace-pre-line text-lg text-white transition-colors hover:text-accent"
            >
              {dictionary.sections.contact.address}
            </a>
            <a
              href={mapsLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-transparent bg-[#d4af37] px-6 py-3 text-sm font-medium uppercase tracking-[0.3em] text-black transition-colors hover:bg-white"
            >
              Маршрут
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
