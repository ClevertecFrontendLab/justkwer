import { FC } from 'react';

import { Feedback } from '../../../../components';
import { BookItemProp } from '../../../../core/types';

import { BookReviewStyled } from './styled';

export const BookReview: FC<{ reviews: BookItemProp['reviews'] }> = ({ reviews }) => (
  <BookReviewStyled>
    {reviews.map((props) => (
      <Feedback key={props.id} {...props} />
    ))}
  </BookReviewStyled>
);
