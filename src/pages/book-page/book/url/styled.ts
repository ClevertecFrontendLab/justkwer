import styled from 'styled-components';

export const BookUrlStyled = styled.div`
  ${({ theme }) => theme.flex.row};
  gap: 4px;
  padding: 20px 0;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 18px;

  div {
    position: absolute;
    left: 0;
    right: 0;
    height: 64px;
    width: 100vw;
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
