import { NavLink } from 'react-router-dom';
import { LinkCustom } from '@components';
import { PathsToPage } from '@core/constants';

import { DropDownLinkProp } from '../prop';

import { DropDownLinkStyled } from './styled';

export const DropDownLink = ({
  link,
  burger,
  isOpen,
}: {
  link: DropDownLinkProp[];
  burger: boolean;
  isOpen: boolean;
}) => (
  <DropDownLinkStyled active={isOpen}>
    <NavLink to={PathsToPage.BooksAll} data-test-id={burger ? 'burger-books' : 'navigation-books'}>
      Все книги
    </NavLink>
    {link.map((props) => (
      <LinkCustom {...props} />
    ))}
  </DropDownLinkStyled>
);
