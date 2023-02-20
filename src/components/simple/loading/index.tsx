import { LoadingSvg } from '@assets';

import { LoadingStyled } from './styled';

export const Loading = () => (
  <LoadingStyled data-test-id='loader'>
    <LoadingSvg />
  </LoadingStyled>
);
