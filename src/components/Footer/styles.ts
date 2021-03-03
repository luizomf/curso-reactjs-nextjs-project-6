import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    border-top: 0.1rem solid ${theme.colors.mediumGray};

    a {
      color: inherit;
      text-decoration: none;
    }
  `}
`;
