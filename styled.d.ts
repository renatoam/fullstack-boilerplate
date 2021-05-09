import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      primaryHover: string
      secondaryHover: string
    }
    images: {
      logo: {
        main: string
        alternative: string
        full: string
      }
    }
    dark: {
      colors: {
        primary: string
      }
    }
  }
}
