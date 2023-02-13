import { BookUrlStyled } from './styled';

export const BookUrl = ({ url, name }: { url: string; name: string }) => (
  <BookUrlStyled>
    {url} / {name}
    <div />
  </BookUrlStyled>
);
