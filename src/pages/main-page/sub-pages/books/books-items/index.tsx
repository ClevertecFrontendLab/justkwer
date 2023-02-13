import { BookItemsProp } from '@core/types';
import { BookCard } from '@pages/book-page/book';

import { BookItemsStyled } from './styled';

export const BookItems = ({ data, display }: BookItemsProp) => (
  <BookItemsStyled isWrap={display.isList}>
    {data.map((props) => (
      <BookCard {...props} key={props.id} display={display.isList} />
    ))}
  </BookItemsStyled>
);
