export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  link: string;
  image: string;
  rating: number;
  categoryName: string;
  likes: number
}

export const products = [
  {
    id: 1,
    name: 'IPhone XR',
    price: 216974,
    description: 'Apple iPhone Xr — воплощение красоты и интеллекта.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-xr-64gb-slim-box-chernyi-100691239/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h65/h29/63943986774046.jpg?format=preview-large',
    rating: 5,
    categoryName: 'Phones',
    likes: 0
  },
  {
    id: 2,
    name: 'IPhone 13 Mini',
    price: 414050,
    description: 'Apple iPhone 13 mini получил дисплей 5.4 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-mini-512gb-zelenyi-104184124/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h3a/h76/64946073468958.jpg?format=preview-large',
    rating: 4,
    categoryName: 'Phones',
    likes: 0
  },
  {
    id: 3,
    name: 'IPhone SE',
    price: 233995,
    description: 'Apple iPhone SE 2022 классический дизайн с мощной начинкой. Благодаря дисплею Retina HD 4.7 дюйма, смартфон легко поместится даже в карман.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-se-2022-64gb-chernyi-104153727/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h92/haa/63993960136734.jpg?format=gallery-medium',
    rating : 3,
    categoryName: 'Phones',
    likes: 0
  },
  {
    id: 4,
    name: 'IPhone 15 Pro Max',
    price: 619410,
    description: 'Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=preview-large',
    rating: 4,
    categoryName: 'Phones',
    likes: 0
  },
  {
    id: 5,
    name: 'Phone 15 Pro',
    price: 549372,
    description: 'Apple iPhone 15 Pro - сверхпрочный смартфон, изготовленный из титана.',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-dual-sim-belyi-114790416/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/h21/84557784645662.jpg?format=preview-large',
    rating: 4,
    categoryName: 'Phones',
    likes: 0
  },
  {
    id: 6,
    name: 'Phone 15',
    price: 382411,
    description: 'A great phone with one of the best cameras',
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-dual-sim-rozovyi-113933635/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h52/84205863469086.png?format=preview-large',
    rating: 5,
    categoryName: 'Phones',
    likes: 0
  },
  {
    id: 7,
    name: 'MacBook Air 13 M1',
    price: 415785,
    description: 'Маленький чип. Грандиозный прорыв. Первый чип, разработанный специально для Mac.',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=preview-large',
    rating: 5,
    categoryName: 'PC',
    likes: 0
  },
  {
    id: 8,
    name: 'MacBook Air 13 M2',
    price: 549990,
    description: 'Маленький чип. Грандиозный прорыв. Первый чип, разработанный специально для Mac.',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mlxy3-serebristyi-106110064/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h31/64515217850398.jpg?format=preview-large',
    rating: 5,
    categoryName: 'PC',
    likes: 0
  },
  {
    id: 9,
    name: 'MacBook Pro 16',
    price: 1449950,
    description: 'Маленький чип. Грандиозный прорыв. Первый чип, разработанный специально для Mac.',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2023-mnw93-seryi-108645788/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf6/heb/68378829062174.jpg?format=preview-large',
    rating: 5,
    categoryName: 'PC',
    likes: 0
  },
  {
    id: 10,
    name: 'MacBook Pro 14',
    price: 979318,
    description: 'Маленький чип. Грандиозный прорыв. Первый чип, разработанный специально для Mac.',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-mphe3-seryi-108645925/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf6/h95/68379275755550.jpg?format=preview-large',
    rating: 5,
    categoryName: 'PC',
    likes: 0
  },
  {
    id: 11,
    name: 'Apple Vision Pro',
    price: 2199334,
    description: 'Apple Vision Pro, революционный пространственный компьютер.',
    link: 'https://kaspi.kz/shop/p/apple-vision-pro-256-gb-116472681/?c=750000000',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/hf9/85120232751134.png?format=preview-large',
    rating: 3,
    categoryName: 'Headsets',
    likes: 0
  },
  {
    id: 12,
    name: 'Battery Iphone',
    price: 78954,
    description: 'Оригинальная батарея на Iphone 15 Pro Max',
    link: 'https://kaspi.kz/shop/p/ansar-dlja-apple-iphone-13-pro-max-4352-mach-107846264/?m=17337749&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gad_source=1&gclid=CjwKCAjw26KxBhBDEiwAu6KXt7YXoedPP675bDWd2nV2FG9oovGG8ovl_TO8SFU8tgWwveA4PgHcuhoCBFwQAvD_BwE',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf7/h41/66422543581214.jpg?format=gallery-medium',
    rating: 4,
    categoryName: 'Repairs',
    likes: 0
  },
  {
    id: 13,
    name: 'Battery MacBook',
    price: 27995,
    description: 'Оригинальная батарея на МакБук',
    link: 'https://kaspi.kz/shop/p/apple-a1496-dlja-apple-macbook-air-a1466-a1369-106195889/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAjw26KxBhBDEiwAu6KXt7YXoedPP675bDWd2nV2FG9oovGG8ovl_TO8SFU8tgWwveA4PgHcuhoCBFwQAvD_BwE',
    image: 'https://images.satu.kz/151496450_w640_h640_akkumulyator-dlya-noutbuka.jpg',
    rating: 3,
    categoryName: 'Repairs',
    likes: 0
  },
  {
    id: 14,
    name: 'Display Iphone',
    price: 40000,
    description: 'Оригинальный Дисплей на Iphone',
    link: 'https://kaspi.kz/shop/p/apple-displei-dlja-apple-iphone-11-pro-106323909/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAjw26KxBhBDEiwAu6KXt7YXoedPP675bDWd2nV2FG9oovGG8ovl_TO8SFU8tgWwveA4PgHcuhoCBFwQAvD_BwE',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha6/h7d/64399417114654.jpg?format=gallery-medium',
    rating: 4,
    categoryName: 'Repairs',
    likes: 0
  },
  {
    id: 15,
    name: 'Apple iPad Pro 2022',
    price: 401944,
    description: 'Apple iPad Pro, компактный удобный планшет.',
    link: 'https://kaspi.kz/shop/p/apple-ipad-pro-2022-wi-fi-11-djuim-8-gb-128-gb-seryi-107276534/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAjw26KxBhBDEiwAu6KXt7YXoedPP675bDWd2nV2FG9oovGG8ovl_TO8SFU8tgWwveA4PgHcuhoCBFwQAvD_BwE',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h15/h91/64895796412446.jpg?format=gallery-medium',
    rating: 3,
    categoryName: 'Tablets',
    likes: 0
  },
  {
    id: 16,
    name: 'Apple iPad 2021',
    price: 148369,
    description: 'Apple iPad 2021, революционный планшет с новым чипом.',
    link: 'https://kaspi.kz/shop/p/apple-ipad-2021-wi-fi-10-2-djuim-3-gb-64-gb-seryi-102301598/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAjw26KxBhBDEiwAu6KXt7YXoedPP675bDWd2nV2FG9oovGG8ovl_TO8SFU8tgWwveA4PgHcuhoCBFwQAvD_BwE',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he4/hdd/64320699203614.jpg?format=gallery-medium',
    rating: 3,
    categoryName: 'Tablets',
    likes: 0
  },
  {
    id: 17,
    name: 'Case for Iphone',
    price: 2402,
    description: 'Силиконовый чехол для Iphone',
    link: 'https://kaspi.kz/shop/p/artisboom-dlja-apple-iphone-14-pro-sinii-109321096/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAjw26KxBhBDEiwAu6KXt7YXoedPP675bDWd2nV2FG9oovGG8ovl_TO8SFU8tgWwveA4PgHcuhoCBFwQAvD_BwE',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h93/h54/70002378833950.jpg?format=gallery-medium',
    rating: 2,
    categoryName: 'Accessories',
    likes: 0
  },
  {
    id: 18,
    name: 'Зарядка Type-C',
    price: 11980,
    description: 'Кабель Apple USB Type-C - USB Type-C 2 м',
    link: 'https://kaspi.kz/shop/p/kabel-apple-usb-type-c---usb-type-c-2-m-mjwt2-100292659/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAjw26KxBhBDEiwAu6KXt7YXoedPP675bDWd2nV2FG9oovGG8ovl_TO8SFU8tgWwveA4PgHcuhoCBFwQAvD_BwE',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/he8/hee/63903948439582.jpg?format=gallery-medium',
    rating: 5,
    categoryName: 'Accessories',
    likes: 0
  },
  {
    id: 19,
    name: 'Wireless Charger',
    price: 19987,
    description: 'Зарядное устройство Rapture R11 серый',
    link: 'https://kaspi.kz/shop/p/rapture-r11-seryi-115944683/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAjw26KxBhBDEiwAu6KXt7YXoedPP675bDWd2nV2FG9oovGG8ovl_TO8SFU8tgWwveA4PgHcuhoCBFwQAvD_BwE',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hcc/h6f/84949934112798.jpg?format=gallery-medium',
    rating: 4,
    categoryName: 'Accessories',
    likes: 0
  },
  {
    id: 20,
    name: 'Apple Watch Series 9',
    price: 202374,
    description: 'Apple Watch Series 9 GPS M/L 45 мм синий-черный',
    link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-sinii-chernyi-113398437/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAjw26KxBhBDEiwAu6KXt7YXoedPP675bDWd2nV2FG9oovGG8ovl_TO8SFU8tgWwveA4PgHcuhoCBFwQAvD_BwE',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h98/83874224799774.jpg?format=gallery-medium',
    rating: 3,
    categoryName: 'Watch',
    likes: 0
  },
  {
    id: 21,
    name: 'Apple Watch SE',
    price: 116884,
    description: 'Apple Watch SE 2 Gen (2022) 40 мм starlight-бежевый',
    link: 'https://kaspi.kz/shop/p/apple-watch-se-2-gen-2022-40-mm-starlight-bezhevyi-106362759/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAjw26KxBhBDEiwAu6KXt7YXoedPP675bDWd2nV2FG9oovGG8ovl_TO8SFU8tgWwveA4PgHcuhoCBFwQAvD_BwE',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/hf8/64534203301918.jpg?format=gallery-medium',
    rating: 4,
    categoryName: 'Watch',
    likes: 0
  },
  {
    id: 22,
    name: 'Apple Watch Ultra Series 2',
    price: 397775,
    description: 'Apple Watch Ultra Series 2 GPS + Cellular 49 мм серебристый-оранжевый',
    link: 'https://kaspi.kz/shop/p/apple-watch-ultra-series-2-gps-cellular-49-mm-serebristyi-oranzhevyi-113574602/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=CjwKCAjw26KxBhBDEiwAu6KXt7YXoedPP675bDWd2nV2FG9oovGG8ovl_TO8SFU8tgWwveA4PgHcuhoCBFwQAvD_BwE',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf5/hab/84060367061022.png?format=gallery-medium',
    rating: 5,
    categoryName: 'Watch',
    likes: 0
  },


];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/