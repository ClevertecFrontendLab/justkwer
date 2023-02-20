import { Facebook, Instagram, Linkendin, Vk } from '@assets';

export const enum PathsToPage {
  Main = '/',
  Manual = '/manual',
  Contract = '/contract',
  Book = '/books/all/:id',
  Books = '/books',
  BooksAll = '/books/all',
}

export const navLink = [
  {
    name: 'Витрина книг',
    key: 1,
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
