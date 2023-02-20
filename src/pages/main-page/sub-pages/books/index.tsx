import { useAppSelector } from '@core/hooks/redux';

import { BookItems } from './books-items';
import { BooksNavigation } from './books-navigation';
import { BooksStyled } from './styled';

export const Books = () => {
  const { error } = useAppSelector((state) => state.books);

  return (
    <BooksStyled>
      {!error && <BooksNavigation />}
      <BookItems />
    </BooksStyled>
  );
};
