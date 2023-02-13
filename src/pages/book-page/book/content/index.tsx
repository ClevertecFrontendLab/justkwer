import { FC } from 'react';

import { detailedInfo } from '../../../../core/constants';
import { H4 } from '../../../../core/theme';
import { BookItemProp } from '../../../../core/types';
import { BookDetailed } from '../detailed';

import { BookContentStyled } from './styled';

export const BookContent: FC<{ info: BookItemProp['info'] }> = ({ info }) => (
  <BookContentStyled>
    <H4>Подробная информация</H4>
    <div>
      <BookDetailed info={info[0]} name={detailedInfo[0]} />
      <BookDetailed info={info[1]} name={detailedInfo[1]} />
    </div>
  </BookContentStyled>
);
