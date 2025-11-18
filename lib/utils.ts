import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const whatsAppLink = (message: string) =>
  `https://wa.me/905418462550?text=${encodeURIComponent(message)}`;
