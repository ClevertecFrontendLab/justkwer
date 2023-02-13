import { useAppSelector } from '@core/hooks/redux';
import { BookItemsProp } from '@core/types';
import { BookCard } from '@pages/book-page/book';

import { BookItemsStyled } from './styled';

export const BookItems = ({ data }: BookItemsProp) => {
  const list = useAppSelector((state) => state.form.list);

  return (
    <BookItemsStyled isWrap={list}>
      {data.map((props) => (
        <BookCard {...props} key={props.id} />
      ))}
    </BookItemsStyled>
  );
};
