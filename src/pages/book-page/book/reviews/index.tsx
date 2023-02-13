import { FC, useState } from 'react';

import { DropDownButton } from '../../../../assets';
import { H4 } from '../../../../core/theme';
import { BookItemProp } from '../../../../core/types';
import { BookReview } from '../review';

import { BookReviewsStyled, ReviewStyled } from './styled';

export const BookReviews: FC<{ reviews: BookItemProp['reviews'] }> = ({ reviews }) => {
  const [isVisible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(!isVisible);
  };

  return (
    <BookReviewsStyled>
      <ReviewStyled>
        <H4>
          Отзывы <span>{reviews.length}</span>
        </H4>
        <DropDownButton onClick={handleClick} data-test-id='button-hide-reviews' />
      </ReviewStyled>
      {isVisible && <BookReview reviews={reviews} />}
    </BookReviewsStyled>
  );
};
