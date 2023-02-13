import { LinkCustomProp } from '@core/types';

import { LinkCustomStyled } from './styled';

export const LinkCustom = ({ name, link, amount }: LinkCustomProp) => (
  <LinkCustomStyled to={link}>
    {name}
    <span>{amount}</span>
  </LinkCustomStyled>
);
