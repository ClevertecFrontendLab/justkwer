import { ButtonCircleProp } from '@core/types';

import { ButtonCircleStyled } from './styled';

export const ButtonCircle = ({ children, isActive, onClick, dataTestId }: ButtonCircleProp) => (
  <ButtonCircleStyled isActive={isActive} onClick={onClick} disabled={isActive} data-test-id={dataTestId}>
    {children}
  </ButtonCircleStyled>
);
