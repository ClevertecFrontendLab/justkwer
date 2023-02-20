import { MouseEvent, MouseEventHandler } from 'react';
import { BookItem, BookItems, Categories } from '@core/types';

export type SubPageProp = {
  title: string;
  paragraph: PageGeneratorProp[];
};

export type PageGeneratorProp = {
  item: string;
  id: string;
  paragraph?: PageGeneratorProp[];
};

export type FeedbackProp = {
  id: number;
  avatar: string;
  name: string;
  data: string;
  rating: number;
  text?: string;
};

export type SearchBarProp = {
  visible: boolean;
  setVisible: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
};

export type ButtonCircleProp = {
  isActive: boolean;
  dataTestId?: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export type ButtonProp = {
  active?: boolean;
};

export type BookInfoProp = {
  img: BookItem['images'];
  name: BookItem['title'];
  author: BookItem['authors'];
  booking: BookItem['booking'];
  about: BookItem['description'];
};

export type FormState = {
  text: string;
  filter: boolean;
  list: boolean;
};

export type BooksState = {
  books?: BookItems[];
  categories?: Categories[];
  error: boolean;
  loading: boolean;
};

export type BookState = {
  book: BookItem | object;
};

export type BookContentProp = {
  publish: BookItem['publish'];
  pages: BookItem['pages'];
  cover: BookItem['cover'];
  weight: BookItem['weight'];
  format: BookItem['format'];
  ISBN: BookItem['ISBN'];
  producer: BookItem['producer'];
  categories: BookItem['categories'];
  issueYear: BookItem['issueYear'];
};

export type DateOptions = {
  day: 'numeric' | '2-digit' | string;
  month: 'long' | '2-digit' | string;
  year?: 'numeric' | string;
};
