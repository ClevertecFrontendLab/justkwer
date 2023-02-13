import styled from 'styled-components';

export const BookUrlStyled = styled.div`
  position: relative;
  ${({ theme }) => theme.flex.row};
  gap: 4px;
  padding: 20px 0;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 18px;

  div {
    position: absolute;
    width: 120vw;
    height: 100%;
    background: ${({ theme }) => theme.colors.greyBlack};
    z-index: -1;
  }

  @media (max-width: ${({ theme }) => theme.media.large}) {
    line-height: 24px;
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    top: -10px;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 18px;
  }
`;
