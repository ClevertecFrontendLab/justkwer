import { FC } from 'react';

import { FeedbackProp } from '../../../core/types';
import { Rating } from '../rating';

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
