// import book from '../../assets/images/main/book/book.png';
import book from '../../assets/images/main/book/preview-book.png';

const books = [
  {
    id: '1',
    image: book,
    rating: 'empty',
    year: 2019,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    author: 'Адитья Бхаргава',
    status: 'available',
    category: 'computers',
  },
  {
    id: '2',
    image: book,
    rating: 4,
    year: 2019,
    title: 'Грокаем алгоритмы. Иллюстрированное',
    author: 'Адитья Бхаргава',
    status: 'available',
    category: 'computers',
  },
  {
    id: '3',
    image: book,
    rating: 4,
    year: 2019,
    title: 'Грокаем алгоритмы.',
    author: 'Адитья Бхаргава',
    status: 'busy',
    bookedTill: '03.05',
    category: 'computers',
  },
  {
    id: '4',
    image: book,
    rating: 4,
    year: 2019,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    author: 'Адитья Бхаргава',
    status: 'available',
    category: 'computers',
  },
  {
    id: '5',
    image: book,
    rating: 4,
    year: 2019,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    author: 'Адитья Бхаргава, Патрик Нимейер',
    status: 'booked',
    category: 'computers',
  },
  {
    id: '6',
    image: 'empty',
    rating: 'empty',
    year: 2019,
    title: 'Грокаем алгоритмы. Иллюстрированное',
    author: 'Адитья Бхаргава, Патрик Нимейер',
    status: 'busy',
    bookedTill: '23.04',
    category: 'computers',
  },
  {
    id: '7',
    image: book,
    rating: 4,
    year: 2019,
    title: 'Грокаем алгоритмы.',
    author: 'Адитья Бхаргава, Патрик Нимейер',
    status: 'available',
    category: 'computers',
  },
  {
    id: '8',
    image: book,
    rating: 4,
    year: 2019,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    author: 'Адитья Бхаргава, Патрик Нимейер',
    status: 'available',
    category: 'computers',
  },
  {
    id: '9',
    image: book,
    rating: 4,
    year: 2019,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    author: 'Адитья Бхаргава',
    status: 'available',
    category: 'computers',
  },
  {
    id: '10',
    image: 'empty',
    rating: 4,
    year: 2019,
    title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    author: 'Адитья Бхаргава',
    status: 'available',
    category: 'computers',
  },
];

export function fetchAll() {
  return books;
}

export function getById(id) {
  const getId = new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(books.find((bookF) => bookF.id === id));
    });
  });

  return getId;
}
