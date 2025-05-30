import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [
    {
      title: 'Versace Eros туалетная вода EDT 100 мл, для мужчин',
      description:
        'Совершенство мужского тела воплощает идеалы греческой мифологии и классической скульптуры, чья атмосфера сопровождает стиль Дома Versace с момента его основания. Он - Эрос, бог любви, вооруженный луком и стрелами, способный заставить человека полюбить. Versace Eros - аромат для сильного, страстного и уверенного в себе мужчины.',
      rating: 5,
      price: '39 990',
      link: 'https://kaspi.kz/shop/p/versace-eros-tualetnaja-voda-edt-100-ml-dlja-muzhchin-17301879/?c=750000000',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/heb/h0e/63817908092958.jpg?format=gallery-medium',
    },
    {
      title: 'Apple iPhone 16 Pro Max 256Gb черный',
      description:
        'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой. Iphone 16 pro max – настоящий титан в своем семействе. Флагманская модель с тончайшими рамками корпуса обладает эргономичным дизайном, высокой ударо- и влагозащитой. Дополнена передней панелью Ceramic Shield последнего поколения и задней – из особого текстурированного стекла с матовой поверхностью. В серии несколько вариантов смартфонов – на 1Тб, на 256Гб, а также iphone 16 pro max 512GB в черном, титановом, белом цвете и новом нежном оттенке Desert Titanium.',
      rating: 5,
      price: '651 837',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=preview-large',
    },
    {
      title: 'Apple AirPods 3 with Lightning Charging Case белый',
      description:
        'Динамический драйвер, разработанный Apple, использует специальный усилитель, обеспечивая невероятную детальность звучания. Вы будете чётко слышать весь спектр — от глубоких, насыщенных басов до кристально чистых высоких нот.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000',
      price: '67 800',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=preview-large',
    },
    {
      title: 'Bonduelle кукуруза сладкая 170 г',
      description:
        ' Тот самый чудесный вкус, которые многие помнят с детства! Сладкая кукуруза тщательно отбирается, прежде чем попасть в банку, процесс от сбора с грядки до упаковки проходит всего за 4 часа, поэтому на вашем столе всегда самые отборные, сочные и золотистые зерна. Создавайте классические, традиционные блюда с сочной и универсальной кукурузой от Bonduelle.',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/bonduelle-kukuruza-sladkaja-170-g-100213747/?c=750000000',
      price: '610',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p77/pd0/23679124.jpeg?format=gallery-medium',
    },
    {
      title: 'Боксеры белый',
      description:
        'Представляем вашему вниманию хлопковые летние детские боксеры от магазина Buyeasy — идеальное нижнее бельё для мальчиков. Эти тонкие боксеры изготовлены из высококачественного хлопка, благодаря которому они приятны на ощупь и позволяют коже дышать.',

      rating: 5,
      link: 'https://kaspi.kz/shop/p/boksery-147234-belyi-98-104-121129825/?c=750000000',
      price: '2 499',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h75/86732733087774.jpg?format=gallery-medium',
    },
    {
      title: 'Яшкино пряники шоколадные 350 г',
      description:
        'Пряники по классической рецептуре из заварного теста с добавлением какао, покрытые сахарной глазурью и глазированным дном.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/trapeza-prjaniki-russkie-vanil-nye-350-g-102903335/?c=750000000',
      price: '699 ',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h97/hd9/68721829249054.jpg?format=gallery-medium',
    },
    {
      title: 'Цветные карандаши Derwent 32891 форма шестигранная 72 шт',
      description:
        'Подарочный набор DERWENT WATERCOLOUR содержит 72 высококачественных акварельных карандаша. Карандаши находятся в красивой деревянной коробке, имеющей логотип фирмы и два небольших замка. Основой для грифеля послужили высококачественные цветные пигменты и белая глина, отличающаяся особой мягкостью и чистотой. Грифель не размазывается и не крошится, тона легко смешиваются между собой. Поразительно яркие цвета и красивые гладкие штрихи придадут рисунку максимальную достоверность. Можно использовать сухими, как обычные карандаши. Чтобы создать потрясающие эффекты, которые ожидаются от акварели в форме карандаша, нужно всего лишь немного воды.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/derwent-32891-forma-shestigrannaja-72-sht-120836981/?c=750000000',
      price: '168 500 ',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hd0/h7c/86390559932446.jpg?format=gallery-medium',
    },
    {
      title:
        'Ноутбук Apple MacBook Pro 16 2023 16.2" / 48 Гб / SSD 1024 Гб / macOS / MUW63',
      description:
        'Apple MacBook Pro 16 M3 Max 2023 - идеально подходит для профессионалов в любых областях и сферах. Он сделает вашу работу более продуктивной за счет повышенной производительности, времени автономной работы и возможностей подключения.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2023-16-2-48-gb-ssd-1024-gb-macos-muw63-114863237/?c=750000000',
      price: '1 971 998 ',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hf8/h2e/84577772339230.jpg?format=gallery-medium',
    },
    {
      title: 'Дыня ЖАНСАЯ',
      description:
        'Подарочный набор DERWENT WATERCOLOUR содержит 72 высококачественных акварельных карандаша. Карандаши находятся в красивой деревянной коробке, имеющей логотип фирмы и два небольших замка. Основой для грифеля послужили высококачественные цветные пигменты и белая глина, отличающаяся особой мягкостью и чистотой. Грифель не размазывается и не крошится, тона легко смешиваются между собой. Поразительно яркие цвета и красивые гладкие штрихи придадут рисунку максимальную достоверность. Можно использовать сухими, как обычные карандаши. Чтобы создать потрясающие эффекты, которые ожидаются от акварели в форме карандаша, нужно всего лишь немного воды.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/dynja-zhansaja-116786805/?c=750000000',
      price: '500 ',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/he4/hb5/85224578023454.jpg?format=gallery-medium',
    },
    {
      title: 'Рахат Kazakhstan шоколадная плитка темный 100 г',
      description:
        'Особенно вкусный молочный шоколад Казахстанский с ванильным ароматом изготовлен из отборных какао-бобов по классической технологии на шоколадной фабрике Рахат. Натуральный шоколад зарядит Вас энергией и подарит радость на весь день.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/rahat-kazakhstan-shokoladnaja-plitka-temnyi-100-g-100221859/?c=750000000',
      price: '735 ',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h21/h90/70365637279774.jpg?format=gallery-medium',
    },
  ];
  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}
