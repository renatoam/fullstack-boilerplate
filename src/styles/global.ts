import { createGlobalStyle } from 'styled-components'
import { theme } from './themes'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  html {
    font-size: 14px;
    font-family: Roboto, sans-serif;
    font-weight: 400;
  }

  body {
    background-color: ${theme.colors.backgroundDark} !important;
    // depois sobrescrever o css baseline do Material, ai posso tirar o important
  }

  a {
    color: inherit;
  }
`
