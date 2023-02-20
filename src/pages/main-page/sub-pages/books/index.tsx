import { BookItems } from './books-items';
import { BooksNavigation } from './books-navigation';
import { BooksStyled } from './styled';

export const Books = () => (
  <BooksStyled>
    <BooksNavigation />
    <BookItems />
  </BooksStyled>
);
