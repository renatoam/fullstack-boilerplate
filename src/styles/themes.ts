import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    primary: '#00DDDD',
    secondary: '#222F2F',
    primaryHover: '#05ACAC',
    secondaryHover: '#2E4141',
    backgroundDark: '#1e272e',
    backgroundLight: '#ecf0f1',
    textPrimary: '#ecf0f1',
    textSecondary: '#1e272e'
  },
  sizes: {
    xsmall: '0.4rem',
    small: '0.7rem',
    normal: '1rem',
    large: '1.5rem',
    xlarge: '2rem',
    xxlarge: '3rem'
  },
  images: {
    logo: {
      main: '/images/logo.svg',
      alternative: '/images/logo-alternative.svg',
      full: '/images/logotipo.svg'
    }
  },
  dark: {
    colors: {
      primary: '#FF70f3'
    }
  }
}

// Paleta: https://flatuicolors.com/palette/se
