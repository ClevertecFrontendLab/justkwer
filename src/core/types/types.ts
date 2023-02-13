import { MouseEvent, MouseEventHandler, ReactNode } from 'react';

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

export type BookItemsProp = {
  data: BookItemProp[];
};

export type BookInfoProp = {
  img?: string[];
  name: string;
  author: string;
  status: [boolean, string];
  about: string[];
};

export type FormState = {
  text: string;
  filter: boolean;
  list: boolean;
};
