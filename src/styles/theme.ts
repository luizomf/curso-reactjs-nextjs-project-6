export const theme = {
  colors: {
    primary: '#000000',
    darkText: '#333333',
    secondary: '#dc143c',
    white: '#FFFFFF',
    mediumGray: '#DDDDDD',
    darkerGray: '#AAAAAA',
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif",
    },
    sizes: {
      xsmall: '8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
  },
  spacings: {
    xsmall: '8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
  sizes: {
    max: '96rem',
    content: '80rem',
  },
} as const;
