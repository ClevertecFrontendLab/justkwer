import { Facebook, Instagram, Linkendin, Vk } from '../../assets';

export const enum PathsToPage {
  Main = '/',
  Manual = '/manual',
  Contract = '/contract',
  Book = '/book/*',
  Books = '/books/*',
  BooksAll = '/books/all',
  Detectives = '/books/detective',
  Business = '/books/business',
  Children = '/books/children',
  Foreign = '/books/foreign',
  History = '/books/history',
  Classic = '/books/classic',
  Psychology = '/books/psychology',
  Computer = '/books/computer',
  Culture = '/books/сulture',
  Science = '/books/science',
  Nonfiction = '/books/nonfiction',
  Reference = '/books/reference',
  Fantasy = '/books/fantasy',
  Humor = '/books/humor',
}

export const navLink = [
  {
    name: 'Витрина книг',
    key: 1,
    links: [
      { name: 'Бизнес-книги', link: PathsToPage.Business, key: 2, amount: 14 },
      { name: 'Детективы', link: PathsToPage.Detectives, key: 3, amount: 8 },
      { name: 'Детские книги', link: PathsToPage.Children, key: 4, amount: 14 },
      { name: 'Зарубежная литература', link: PathsToPage.Foreign, key: 5, amount: 2 },
      { name: 'История', link: PathsToPage.History, key: 6, amount: 5 },
      { name: 'Классическая литература', link: PathsToPage.Classic, key: 7, amount: 12 },
      { name: 'Книги по психологии', link: PathsToPage.Psychology, key: 8, amount: 11 },
      { name: 'Компьютерная литература', link: PathsToPage.Computer, key: 9, amount: 54 },
      { name: 'Культура и искусство', link: PathsToPage.Culture, key: 10, amount: 5 },
      { name: 'Наука и образование', link: PathsToPage.Science, key: 11, amount: 2 },
      { name: 'Публицистическая литература', link: PathsToPage.Nonfiction, key: 12, amount: 0 },
      { name: 'Справочники', link: PathsToPage.Reference, key: 13, amount: 10 },
      { name: 'Фантастика', link: PathsToPage.Fantasy, key: 14, amount: 12 },
      { name: 'Юмористическая литература', link: PathsToPage.Humor, key: 15, amount: 8 },
    ],
  },
  {
    name: 'Правила пользования',
    key: 2,
    link: PathsToPage.Manual,
    test: 'navigation-terms',
    testBurger: 'burger-terms',
  },
  {
    name: 'Договор оферты',
    key: 3,
    link: PathsToPage.Contract,
    test: 'navigation-contract',
    testBurger: 'burger-contract',
  },
];

export const social = [
  {
    name: 'facebook',
    link: '',
    img: <Facebook />,
  },
  {
    name: 'instagram',
    link: '',
    img: <Instagram />,
  },
  {
    name: 'vk',
    link: '',
    img: <Vk />,
  },
  {
    name: 'linkendin',
    link: '',
    img: <Linkendin />,
  },
];
