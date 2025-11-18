export type MenuCategory =
  | 'appetizers'
  | 'soups'
  | 'russian'
  | 'mediterranean'
  | 'desserts'
  | 'drinks';

export interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: string;
  category: MenuCategory;
  image: string;
}

export const menuCategories: { key: MenuCategory; label: string }[] = [
  { key: 'appetizers', label: 'Appetizers' },
  { key: 'soups', label: 'Soups' },
  { key: 'russian', label: 'Russian Main' },
  { key: 'mediterranean', label: 'Mediterranean Main' },
  { key: 'desserts', label: 'Desserts' },
  { key: 'drinks', label: 'Drinks' },
];

export const menuItems: MenuItem[] = [
  {
    id: 'black-olives',
    title: 'Black Olives Trio',
    description: 'Маринованные оливки с дымным маслом и цитрусом.',
    price: '210 ₺ / 7 €',
    category: 'appetizers',
    image:
      'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tuna-crudo',
    title: 'Тунец Crudo',
    description: 'Тонко нарезанный тунец, юдзу, морская соль и трюфельное масло.',
    price: '420 ₺ / 13 €',
    category: 'appetizers',
    image:
      'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'baked-beet',
    title: 'Запечённая свёкла',
    description: 'Свёкла на углях, крем из козьего сыра и орех пралине.',
    price: '280 ₺ / 9 €',
    category: 'appetizers',
    image:
      'https://images.unsplash.com/photo-1481931098730-318b6f776db0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'borsch',
    title: 'Борщ с черным чесноком',
    description: 'Говяжий бульон, свёкла, копчёная сметана и укропное масло.',
    price: '330 ₺ / 11 €',
    category: 'soups',
    image:
      'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'bisque',
    title: 'Лангустиновый бисque',
    description: 'Насыщенный крем-суп из лангустинов, шафрана и вермута.',
    price: '460 ₺ / 15 €',
    category: 'soups',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'solyanka',
    title: 'Авторская солянка',
    description: 'Копчёности, томаты, лимонный крем и каперсы.',
    price: '340 ₺ / 11 €',
    category: 'soups',
    image:
      'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pelmeni',
    title: 'Северные пельмени',
    description: 'Телятина, ягнёнок, сливочное масло и пудра из укропа.',
    price: '390 ₺ / 12 €',
    category: 'russian',
    image:
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'beef-stroganoff',
    title: 'Stroganoff 2.0',
    description: 'Мраморная говядина, крем из белых грибов, картофельный пармезан.',
    price: '540 ₺ / 18 €',
    category: 'russian',
    image:
      'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'cod',
    title: 'Мурманская треска',
    description: 'Пюре из сельдерея, карамелизированная морковь и масло кориандра.',
    price: '620 ₺ / 21 €',
    category: 'russian',
    image:
      'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'octopus',
    title: 'Средиземноморский осьминог',
    description: 'Гриль, копчёная паприка, крем из фасоли и цитрусовый соус.',
    price: '640 ₺ / 21 €',
    category: 'mediterranean',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'lamb',
    title: 'Ягнёнок на тандыре',
    description: 'Травы, печёный баклажан и гранатовый глясс.',
    price: '680 ₺ / 22 €',
    category: 'mediterranean',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'sea-bass',
    title: 'Морской окунь',
    description: 'Лимонное масло, фенхель и чернила каракатицы.',
    price: '610 ₺ / 20 €',
    category: 'mediterranean',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'tiramisu',
    title: 'Тирамису Black Island',
    description: 'Кофейный мусс с ромом и шоколадным золотом.',
    price: '280 ₺ / 9 €',
    category: 'desserts',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pavlova',
    title: 'Павлова с инжиром',
    description: 'Воздушный безе, инжир и крем из шампанского.',
    price: '310 ₺ / 10 €',
    category: 'desserts',
    image: 'https://i.imgur.com/MH0LaFq.png',
  },
  {
    id: 'espresso-martini',
    title: 'Espresso Martini',
    description: 'Холодный кофе, водка ваниль и карамельный сироп.',
    price: '260 ₺ / 8 €',
    category: 'drinks',
    image:
      'https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'black-ice-tea',
    title: 'Black Island Ice Tea',
    description: 'Чёрный чай, бергамот, мед и дымчатая вода.',
    price: '190 ₺ / 6 €',
    category: 'drinks',
    image:
      'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=800&q=80',
  },
];
