import type { Dictionary, Locale } from './dictionary';
import { defaultLocale } from './dictionary';

export async function getDictionary(locale: Locale = defaultLocale): Promise<Dictionary> {
  const { dictionaries } = await import('./dictionary');
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
