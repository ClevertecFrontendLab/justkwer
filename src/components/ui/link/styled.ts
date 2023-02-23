import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkCustomStyled = styled(NavLink)`
  padding-left: 4px;
  ${({ theme }) => theme.flex.row};

  & > p {
    max-width: max-content;
  }

  span {
    padding-left: 6px;
    color: ${({ theme }) => theme.colors.greyBlack40};
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }

  &.active {
    span {
      color: ${({ theme }) => theme.colors.dark};
      -webkit-text-fill-color: initial;
      background: none;
    }
  }
`;
