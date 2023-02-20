import { BurgerMenu, Error, Loading, Logo, PageName, Person } from '@components';
import { useAppSelector } from '@core/hooks/redux';

import { HeaderMenuStyled } from './styled';

export const HeaderMenu = () => {
  const { loading } = useAppSelector((state) => state.books);
  const { error } = useAppSelector((state) => state.books);

  return (
    <HeaderMenuStyled>
      <Logo />
      <BurgerMenu />
      <PageName />
      <Person />
      {loading && <Loading />}
      {error && <Error />}
    </HeaderMenuStyled>
  );
};
