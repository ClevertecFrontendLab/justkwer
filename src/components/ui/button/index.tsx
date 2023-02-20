import { FC, PropsWithChildren } from 'react';
import { ButtonProp } from '@core/types';

import { ButtonStyled } from './styled';

export const Button: FC<PropsWithChildren<ButtonProp>> = ({ children, active }) => (
  <ButtonStyled active={active} disabled={!active}>
    {children}
  </ButtonStyled>
);
