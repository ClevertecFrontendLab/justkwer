import { Rating } from '../../../../components';
import { H4 } from '../../../../core/theme';

import { BookRatingStyled } from './styled';

export const BookRating = ({ rating }: { rating?: number }) => (
  <BookRatingStyled>
    <H4>Рейтинг</H4>
    <div>
      <Rating rating={rating} />
      <H4>{rating}</H4>
    </div>
  </BookRatingStyled>
);
