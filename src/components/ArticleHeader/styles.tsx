import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xlarge};
    margin-bottom: ${theme.spacings.xlarge};
    border-bottom: 0.1rem solid ${theme.colors.mediumGray};

    ${HeadingStyles} {
      margin: 0;
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`;

export const Excerpt = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const Cover = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    display: block;
    margin-bottom: ${theme.spacings.medium};
  `}
`;
