import { FC, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cat } from '@assets';
import { Button, Rating } from '@components';
import { apiUrl, cardDateOptions } from '@core/constants';
import { useAppSelector } from '@core/hooks/redux';
import { BookItems } from '@core/types';
import { getDate, searchRegExp } from '@core/utils';

import { BookCardStyled, FigureStyled } from './styled';

export const BookCard: FC<BookItems> = ({ ...props }) => {
  const { image, rating, title, authors, id, issueYear, booking } = props;
  const { list } = useAppSelector((state) => state.form);
  const { text } = useAppSelector((state) => state.form);
  const spanText = useMemo(() => title.replace(searchRegExp(text), text), [title, text]);

  const navigate = useNavigate();

  const handleClick = () => navigate(`/books/all/${id}`);

  return (
    <BookCardStyled isWrap={list} onClick={handleClick} data-test-id='card'>
      <FigureStyled img={!!image}>{image ? <img src={apiUrl + image.url} alt={title} /> : <Cat />}</FigureStyled>
      <figcaption>
        <Rating rating={rating} />
        <h3>{spanText}</h3>
        <span>
          {authors}, {issueYear}
        </span>
        <Button active={!booking}>
          {booking?.dateOrder ? `Занята до ${getDate(booking.dateOrder, cardDateOptions)}` : 'Забронировать'}
        </Button>
      </figcaption>
    </BookCardStyled>
  );
};
