import { Dispatch, MouseEvent, MouseEventHandler, ReactNode, SetStateAction } from 'react';

export type SubPageProp = {
  title: string;
  paragraph: PageGeneratorProp[];
};

export type PageGeneratorProp = {
  item: string;
  id: string;
  paragraph?: PageGeneratorProp[];
};

export type BookItemProp = {
  id: number;
  url: string;
  img?: string[];
  rating?: number;
  name: string;
  author: string;
  status: [boolean, string];
  about: string[];
  info: string[][];
  reviews: FeedbackProp[];
  feedback: [boolean, string];
};

export type FeedbackProp = {
  id: number;
  avatar: string;
  name: string;
  data: string;
  rating: number;
  text?: string;
};

export type LinkCustomProp = { name: string; link: string; amount?: number };

export type SearchBarProps = {
  setSearchText: (text: string) => void;
  text: string;
  visible: boolean;
  setVisible: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
};

export type ButtonCircleProp = {
  children?: ReactNode;
  isActive: boolean;
  dataTestId?: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export type ButtonProp = {
  active?: boolean;
  children?: ReactNode;
};

export type BooksNavigationProp = {
  setNavState: Dispatch<SetStateAction<BookItemsProp['display']>>;
  navState: BookItemsProp['display'];
};

export type BookItemsProp = {
  data: BookItemProp[];
  display: { isList: boolean };
};

export type BookInfoProp = {
  img?: string[];
  name: string;
  author: string;
  status: [boolean, string];
  about: string[];
};
