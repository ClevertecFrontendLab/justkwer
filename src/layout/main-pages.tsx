import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Navigation } from '@components';
import { getApiBooks } from '@store/reducers/books';

export const MainPages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiBooks());
  }, [dispatch]);

  return (
    <Fragment>
      <Navigation burger={false} />
      <Outlet />
    </Fragment>
  );
};
