import { useLocation } from 'react-router-dom';

import { Button } from '../../components';
import { Section } from '../../core/theme';
import { BookItemProp } from '../../core/types';

import { BookAbout, BookContent, BookInfo, BookRating, BookReviews, BookUrl } from './book';
import { BookPageStyled } from './styled';

export const BookPage = () => {
  const { url, name, img, author, status, about, rating, info, reviews, feedback } = useLocation()
    .state as BookItemProp;

  return (
    <BookPageStyled>
      <Section>
        <BookUrl url={url} name={name} />
        <BookInfo img={img} name={name} author={author} status={status} about={about} />
        <BookAbout about={about} inFigure={true} />
        <BookRating rating={rating} />
        <BookContent info={info} />
        <BookReviews reviews={reviews} />
        <Button active={feedback[0]} data-test-id='button-rating'>
          {feedback[1]}
        </Button>
      </Section>
    </BookPageStyled>
  );
};
