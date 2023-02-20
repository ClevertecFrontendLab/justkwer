import { Categories } from '@core/types';

import { LinkCustomStyled } from './styled';

export const LinkCustom = ({ name, path, id }: Categories) => (
  <LinkCustomStyled to={path}>
    {name}
    <span>{id}</span>
  </LinkCustomStyled>
);
