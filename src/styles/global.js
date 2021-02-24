import { createGlobalStyle } from 'styled-components'

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

  a {
    color: inherit;
  }

  .centered {
    display: flex;

    &.margin {
      margin-left: auto;
      margin-right: auto;
    }

    &.position {
      transform: translate(-50%, -50%);

      &.x {
        left: 50%;
      }

      &.y {
        top: 50%;
      }

      &.full {
        left: 50%;
        top: 50%;
      }
    }

    &.children {
      justify-content: center;
      align-items: center;

      &.column {
        flex-direction: column;
      }
    }
  }
`
