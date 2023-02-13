import { FC } from 'react';
import { Rating } from '@components/simple/rating';
import { FeedbackProp } from '@core/types';

import { FeedbackStyled, FeedbackUserStyled } from './styled';

export const Feedback: FC<FeedbackProp> = ({ avatar, name, data, rating, text }) => (
  <FeedbackStyled>
    <FeedbackUserStyled>
      <figure>
        <img src={avatar} alt={name} />
        <figcaption>
          <span>{name}</span>
          <span>{data}</span>
        </figcaption>
      </figure>
    </FeedbackUserStyled>
    <Rating rating={rating} />
    {text && <p>{text}</p>}
  </FeedbackStyled>
);
