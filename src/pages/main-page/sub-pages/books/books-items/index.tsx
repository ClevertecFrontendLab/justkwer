import { useAppSelector } from '@core/hooks/redux';
import { BookCard } from '@pages/book-page/book';

import { BookItemsStyled } from './styled';

export const BookItems = () => {
  const { list } = useAppSelector((state) => state.form);
  const { books } = useAppSelector((state) => state.books);
  const { error } = useAppSelector((state) => state.books);

  return (
    <BookItemsStyled isWrap={list}>
      {books && !error && books.map((props) => <BookCard {...props} key={props.id} />)}
    </BookItemsStyled>
  );
};
