import { FC } from 'react';
import { Cat } from '@assets';
import { Button, Slider } from '@components';
import { apiUrl } from '@core/constants';
import { H2 } from '@core/theme';
import { BookInfoProp } from '@core/types';

import { BookAbout } from '../about';
import { FigureStyled } from '../card/styled';

import { BookInfoDivStyled, BookInfoStyled } from './styled';

export const BookInfo: FC<BookInfoProp> = ({ img, name, author, booking, about }) => (
  <BookInfoStyled>
    {img.length > 1 ? (
      <Slider images={img} />
    ) : (
      <FigureStyled img={!img[0].url} data-test-id='slide-big'>
        {img[0].url ? <img src={apiUrl + img[0].url} alt='book img' /> : <Cat />}
      </FigureStyled>
    )}
    <figcaption>
      <BookInfoDivStyled>
        <H2>{name}</H2>
        <span>{author}</span>
        <Button active={!booking}>{booking?.dateOrder ? `${new Date(booking?.dateOrder)}` : 'Забронировать'}</Button>
      </BookInfoDivStyled>
      <BookAbout about={about} inFigure={false} />
    </figcaption>
  </BookInfoStyled>
);
