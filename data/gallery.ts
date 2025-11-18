export interface GalleryImage {
  id: string;
  image: string;
  title: string;
  orientation: 'portrait' | 'landscape';
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'interior-1',
    image: 'https://i.imgur.com/at8UXKI.png',
    title: 'Зал Black Island',
    orientation: 'landscape',
  },
  {
    id: 'interior-2',
    image: 'https://i.imgur.com/bI7yrF9.png',
    title: 'Авторский бар',
    orientation: 'portrait',
  },
  {
    id: 'interior-3',
    image: 'https://i.imgur.com/q3j4u3e.png',
    title: 'Приватный стол',
    orientation: 'landscape',
  },
];
