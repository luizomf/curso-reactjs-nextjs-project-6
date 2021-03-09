import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 2;
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 5rem;
  height: 2.5rem;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
  color: rgba(0, 0, 0, 0);
`;

export const Input = styled.input`
  ${({ theme }) => css`
    appearance: none;
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + ${Slider} {
      background: ${theme.colors.secondary};
    }

    &:focus + ${Slider} {
      box-shadow: 0 0 1px ${theme.colors.secondary};
    }

    &:checked + ${Slider}:before {
      transform: translateX(1.9rem);
      background: ${theme.colors.primary};
    }
  `}
`;

export const Slider = styled.span`
  ${({ theme }) => css`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${theme.colors.mediumGray};
    transition: all 300ms ease-in-out;
    border-radius: 2rem;
    box-shadow: 0 0 1px ${theme.colors.primary};

    &:before {
      content: '';
      position: absolute;
      height: 2.1rem;
      width: 2.1rem;
      left: 0.4rem;
      bottom: 0.2rem;
      background: ${theme.colors.darkText};
      border-radius: 50%;
      transition: all 300ms ease-in-out;
    }
  `}
`;
