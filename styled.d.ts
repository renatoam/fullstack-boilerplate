import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      primaryHover: string
      secondaryHover: string
      backgroundDark: string
      backgroundLight: string
      textPrimary: string
      textSecondary: string
    }
    sizes: {
      xsmall: string
      small: string
      normal: string
      large: string
      xlarge: string
      xxlarge: string
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
