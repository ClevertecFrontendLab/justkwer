import { BookItems } from './books-items';
import { BooksNavigation } from './books-navigation';
import { config } from './config';
import { BooksStyled } from './styled';

export const Books = () => (
  <BooksStyled>
    <BooksNavigation />
    <BookItems data={config} />
  </BooksStyled>
);
