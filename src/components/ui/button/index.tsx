import { ButtonProp } from '@core/types';

import { ButtonStyled } from './styled';

export const Button = ({ children, active }: ButtonProp) => (
  <ButtonStyled active={active} disabled={!active}>
    {children}
  </ButtonStyled>
);
