import { Cat } from '../../../../assets';
import { Button, Slider } from '../../../../components';
import { H2 } from '../../../../core/theme';
import { BookInfoProp } from '../../../../core/types';
import { BookAbout } from '../about';
import { FigureStyled } from '../card/styled';

import { BookInfoDivStyled, BookInfoStyled } from './styled';

export const BookInfo = ({ img, name, author, status, about }: BookInfoProp) => (
  <BookInfoStyled>
    {img && img.length !== 1 ? (
      <Slider images={img} />
    ) : (
      <FigureStyled img={img} data-test-id='slide-big'>
        {img ? <img src={img[0]} alt='book img' /> : <Cat />}
      </FigureStyled>
    )}
    <figcaption>
      <BookInfoDivStyled>
        <H2>{name}</H2>
        <span>{author}</span>
        <Button active={status[0]}>{status[1]}</Button>
      </BookInfoDivStyled>
      <BookAbout about={about} inFigure={false} />
    </figcaption>
  </BookInfoStyled>
);
