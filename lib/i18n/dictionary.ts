export type Locale = 'ru' | 'en';

export type Dictionary = {
  nav: {
    home: string;
    menu: string;
    about: string;
    booking: string;
  };
  hero: {
    headline: string;
    subline: string;
    cuisine: string;
    hours: string;
    button: string;
  };
  sections: {
    signature: {
      title: string;
      subtitle: string;
    };
    gallery: {
      title: string;
      subtitle: string;
    };
    booking: {
      title: string;
      subtitle: string;
      cta: string;
    };
    team: {
      title: string;
      subtitle: string;
    };
    contact: {
      title: string;
      subtitle: string;
      email: string;
      phone: string;
      address: string;
    };
    history: {
      title: string;
      paragraphs: string[];
    };
  };
  menuPage: {
    headline: string;
    description: string;
    tabs: {
      appetizers: string;
      soups: string;
      russian: string;
      mediterranean: string;
      desserts: string;
      drinks: string;
    };
  };
  aboutPage: {
    story: string;
    teamIntro: string;
  };
  buttons: {
    order: string;
    close: string;
  };
  footer: {
    rights: string;
    socials: string;
  };
  notFound: {
    title: string;
    description: string;
    cta: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  ru: {
    nav: {
      home: 'Главная',
      menu: 'Меню',
      about: 'О нас',
      booking: 'Бронь',
    },
    hero: {
      headline: 'Black Island',
      subline: 'Cafe Restaurant',
      cuisine: 'Русская и средиземноморская кухня • Коньяалты',
      hours: '10:00 – 00:00 ежедневно',
      button: 'Забронировать столик',
    },
    sections: {
      signature: {
        title: 'Рекомендации шефа',
        subtitle: 'Шесть культовых блюд, которые сформировали наш вкус Анталии.',
      },
      gallery: {
        title: 'Интерьер',
        subtitle: 'Атмосфера сумеречного зала и приватных столиков у панорамных окон.',
      },
      booking: {
        title: 'Бронирование',
        subtitle: 'Мы подтверждаем каждую бронь лично и готовим стол к вашему приезду.',
        cta: 'Написать в WhatsApp',
      },
      team: {
        title: 'Наша команда',
        subtitle: 'Люди, которые создают гастрономический опыт Black Island.',
      },
      contact: {
        title: 'Контакты',
        subtitle: 'Мы всегда на связи, чтобы помочь спланировать ваш вечер.',
        email: 'blackislandantalya@gmail.com',
        phone: '+905539545078',
        address:
          'LİMAN MAHALLESİ BOĞAÇAY CADDESİ YASEMİN APARTMANI 17B/1 KONYAALTI\n07130 ANTALYA',
      },
      history: {
        title: 'История Black Island',
        paragraphs: [
          'Black Island Cafe Restaurant родился из идеи соединить ностальгию русской кухни и лёгкость средиземноморского побережья. Мы открылись в сердце Коньяалты, где море встречает горы, чтобы предложить гостям честную кухню и архитектуру света.',
          'Каждый вечер мы зажигаем мягкие светильники, включаем пластинки и встречаем гостей, которые ценят гастрономический стиль. Меню обновляется по сезонам, но наши фирменные блюда — борщ с черным чесноком, мурманская треска и авторский тирамису — остаются неизменными.',
          'Сегодня Black Island — это не просто ресторан, а пространство с характером. Здесь назначают свидания, обсуждают проекты, отмечают важные события. Мы гордимся тем, что остаёмся камерным местом, где каждый гость — часть семьи.',
        ],
      },
    },
    menuPage: {
      headline: 'Меню Black Island',
      description: 'Выберите настроение и погрузитесь в гастрономическую карту от шефа.',
      tabs: {
        appetizers: 'Закуски',
        soups: 'Супы',
        russian: 'Русские блюда',
        mediterranean: 'Средиземноморские блюда',
        desserts: 'Десерты',
        drinks: 'Напитки',
      },
    },
    aboutPage: {
      story: 'Мы создаём элегантную гастрономию без компромиссов в качестве продуктов и сервисе.',
      teamIntro: 'Команда, которая задаёт темп вечерам в Konyaaltı.',
    },
    buttons: {
      order: 'Заказать в WhatsApp',
      close: 'Закрыть',
    },
    footer: {
      rights: '© ' + new Date().getFullYear() + ' Black Island. Все права защищены.',
      socials: 'Мы в соцсетях',
    },
    notFound: {
      title: 'Страница не найдена',
      description: 'Похоже, вы попали в тень Black Island.',
      cta: 'Вернуться на главную',
    },
  },
  en: {
    nav: {
      home: 'Home',
      menu: 'Menu',
      about: 'About',
      booking: 'Book',
    },
    hero: {
      headline: 'Black Island',
      subline: 'Cafe Restaurant',
      cuisine: 'Russian & Mediterranean cuisine • Konyaaltı',
      hours: '10:00 – 00:00 daily',
      button: 'Reserve a Table',
    },
    sections: {
      signature: {
        title: 'Chef Signatures',
        subtitle: 'Six iconic plates defining our Antalya flavor.',
      },
      gallery: {
        title: 'Interior',
        subtitle: 'Twilight ambience with private booths and warm lighting.',
      },
      booking: {
        title: 'Booking',
        subtitle: 'We confirm every reservation personally and prepare your table.',
        cta: 'Message on WhatsApp',
      },
      team: {
        title: 'Our Team',
        subtitle: 'People crafting the Black Island dining story.',
      },
      contact: {
        title: 'Contacts',
        subtitle: 'Always here to help plan your evening.',
        email: 'blackislandantalya@gmail.com',
        phone: '+905539545078',
        address:
          'LİMAN MAHALLESİ BOĞAÇAY CADDESİ YASEMİN APARTMANI 17B/1 KONYAALTI\n07130 ANTALYA',
      },
      history: {
        title: 'The Black Island Story',
        paragraphs: [
          'Black Island Cafe Restaurant was born from a desire to blend Russian nostalgia with Mediterranean breeze. In Konyaaltı we built a dining room of shadows and gold accents for honest cuisine.',
          'Every evening we light the lamps, spin the vinyls and welcome guests who appreciate gastronomy with character. Seasonal menus evolve but our signatures — beetroot borscht, Murmansk cod and tiramisu — remain.',
          'Today Black Island is a destination with soul. Couples, creatives and travelers gather here, and every guest becomes part of the family.',
        ],
      },
    },
    menuPage: {
      headline: 'Black Island Menu',
      description: 'Choose your mood and explore the chef-driven map.',
      tabs: {
        appetizers: 'Appetizers',
        soups: 'Soups',
        russian: 'Russian Main',
        mediterranean: 'Mediterranean Main',
        desserts: 'Desserts',
        drinks: 'Drinks',
      },
    },
    aboutPage: {
      story: 'We craft elegant gastronomy without compromising produce or service.',
      teamIntro: 'The team setting the tone for nights in Konyaaltı.',
    },
    buttons: {
      order: 'Order on WhatsApp',
      close: 'Close',
    },
    footer: {
      rights: '© ' + new Date().getFullYear() + ' Black Island. All rights reserved.',
      socials: 'Follow us',
    },
    notFound: {
      title: 'Page not found',
      description: 'It looks like you stepped into Black Island’s shadow.',
      cta: 'Return to home',
    },
  },
};

export const defaultLocale: Locale = 'ru';
