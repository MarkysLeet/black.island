import Link from 'next/link';
import { defaultLocale } from '@/lib/i18n/dictionary';
import { getDictionary } from '@/lib/i18n/getDictionary';

export default async function NotFoundPage() {
  const dictionary = await getDictionary(defaultLocale);
  const copy = dictionary.notFound;

  return (
    <div className="min-h-[70vh] bg-[#0a0a0a] px-6 py-20 text-center text-[#e5e5e5]">
      <div className="not-found-fade mx-auto flex max-w-2xl flex-col items-center">
        <p className="text-sm uppercase tracking-[0.4em] text-accent">Black Island</p>
        <h1 className="mt-4 font-playfair text-5xl italic text-white sm:text-6xl">{copy.title}</h1>
        <p className="mt-6 text-lg text-[#d4af37]">{copy.description}</p>
        <p className="mt-2 text-base text-[#e5e5e5]/80">
          Konyaaltı · Antalya · 36°N — чувствуется аромат свежесмолотого кофе.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center rounded-full bg-[#d4af37] px-8 py-3 font-semibold text-[#111111] transition hover:bg-white"
        >
          {copy.cta}
        </Link>
      </div>
    </div>
  );
}
