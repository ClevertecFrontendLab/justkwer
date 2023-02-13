import { BurgerMenu, Logo, PageName, Person } from '../..';

import { HeaderMenuStyled } from './styled';

export const HeaderMenu = () => (
  <HeaderMenuStyled>
    <Logo />
    <BurgerMenu />
    <PageName />
    <Person />
  </HeaderMenuStyled>
);
