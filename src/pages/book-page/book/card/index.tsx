import { useNavigate } from 'react-router-dom';

import { Cat } from '../../../../assets';
import { Button, Rating } from '../../../../components';
import { BookItemProp } from '../../../../core/types';

import { BookCardStyled, FigureStyled } from './styled';

export const BookCard = ({ display, ...props }: { display: boolean } & BookItemProp) => {
  const { img, rating, name, author, status, url } = props;
  const navigate = useNavigate();
  const handleClick = () => navigate(`/book/${url}/${name}`, { state: { ...props } });

  return (
    <BookCardStyled isWrap={display} onClick={handleClick} data-test-id='card'>
      <FigureStyled img={img}>{img ? <img src={img[0]} alt={name} /> : <Cat />}</FigureStyled>
      <figcaption>
        <Rating rating={rating} />
        <h3>{name}</h3>
        <span>{author}</span>
        <Button active={status[0]}>{status[1]}</Button>
      </figcaption>
    </BookCardStyled>
  );
};
