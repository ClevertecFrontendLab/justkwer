import { arrRating, noRating } from '@core/constants';

import { RatingStyled, StarStyled } from './styled';

export const Rating = ({ rating }: { rating?: number }) => (
  <RatingStyled>
    {rating ? arrRating.map((item) => <StarStyled key={item} fill={(item <= rating).toString()} />) : noRating}
  </RatingStyled>
);
