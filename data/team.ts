export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  instagram?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'mert',
    name: 'Mert Arıkan',
    role: 'Шеф-повар',
    bio: 'Создаёт баланс северных техник и средиземноморских текстур.',
    image: 'https://i.imgur.com/vAQqaXD.png',
    instagram: 'https://www.instagram.com/',
  },
  {
    id: 'valeria',
    name: 'Валерия Озерова',
    role: 'Шеф-кондитер',
    bio: 'Отвечает за десерты с акцентом на сезонные продукты.',
    image:
      'https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?auto=format&fit=crop&w=600&q=80',
    instagram: 'https://www.instagram.com/',
  },
  {
    id: 'deniz',
    name: 'Deniz Kaya',
    role: 'Управляющий залом',
    bio: 'Оркеструет сервис и атмосферу вечерних посадок.',
    image: 'https://i.imgur.com/ddQZP3N.png',
    instagram: 'https://www.instagram.com/',
  },
  {
    id: 'leonid',
    name: 'Леонид Мирский',
    role: 'Бар-шеф',
    bio: 'Отвечает за коктейли с дымом, специями и цитрусами.',
    image:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80',
    instagram: 'https://www.instagram.com/',
  },
];
