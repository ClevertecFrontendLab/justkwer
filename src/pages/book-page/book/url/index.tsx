import { FC } from 'react';

import { BookUrlStyled } from './styled';

export const BookUrl: FC<{ category: string; title: string }> = ({ category, title }) => (
  <BookUrlStyled>
    {category} / {title}
    <div />
  </BookUrlStyled>
);
