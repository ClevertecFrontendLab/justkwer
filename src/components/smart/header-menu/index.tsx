import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BurgerMenu, Error, Loading, Logo, PageName, Person } from '@components';
import { getApiBooks } from '@store/reducers/books';

import { HeaderMenuStyled } from './styled';

export const HeaderMenu = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiBooks());
  }, [dispatch]);

  return (
    <HeaderMenuStyled>
      <Logo />
      <BurgerMenu />
      <PageName />
      <Person />
      <Loading />
      <Error />
    </HeaderMenuStyled>
  );
};
