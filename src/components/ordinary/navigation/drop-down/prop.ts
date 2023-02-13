import { PathsToPage } from '../../../../core/constants';

export type DropDownProp = {
  name: string;
  links: DropDownLinkProp[];
  isActive: boolean;
  burger: boolean;
  handleClick: (e: boolean) => void;
};

export type DropDownLinkProp = {
  name: string;
  link: PathsToPage;
  key: number;
};

export type DropDownNameProps = {
  name: string;
  setIsOpen: (prevState: boolean) => void;
  isOpen: boolean;
  burger: boolean;
};
