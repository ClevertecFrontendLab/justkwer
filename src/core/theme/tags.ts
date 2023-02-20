import styled, { css } from 'styled-components';

export const Link = css`
  font-size: 1.125rem;
  line-height: 30px;
  font-weight: ${({ theme }) => theme.fonts.weight.title};
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Active = css`
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Section = styled.section`
  max-width: ${({ theme }) => theme.sizes.container.width[0]}px;
  padding: ${({ theme }) => theme.sizes.container.padding[0]};

  @media (max-width: ${({ theme }) => theme.media.large}) {
    max-width: ${({ theme }) => theme.sizes.container.width[1]}px;
    padding: ${({ theme }) => theme.sizes.container.padding[1]};
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    max-width: ${({ theme }) => theme.sizes.container.width[2]}px;
    padding: ${({ theme }) => theme.sizes.container.padding[2]};
  }
`;

export const H1 = styled.h1`
  font-size: 2rem;
  line-height: 40px;
  font-weight: ${({ theme }) => theme.fonts.weight.title};

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    font-size: 1.125rem;
    line-height: 28px;
  }
`;

export const H2 = styled.h2`
  font-size: 2rem;
  line-height: 40px;
  font-weight: ${({ theme }) => theme.fonts.weight.title};

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    font-size: 1.125rem;
    line-height: 28px;
  }
`;

export const H3 = styled.h3`
  ${Link};
`;

export const H4 = styled.h4`
  font-size: 1.125rem;
  line-height: 28px;
  font-weight: ${({ theme }) => theme.fonts.weight.title};
`;
export const H5 = styled.h5`
  font-size: 1rem;
  line-height: 24px;
  font-weight: ${({ theme }) => theme.fonts.weight.secondary};
  color: ${({ theme }) => theme.colors.greyBlack40};
`;
