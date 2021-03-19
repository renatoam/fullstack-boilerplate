import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      primaryHover: string;
      secondaryHover: string;
    },
    images: {
      main: string;
      alt: string;
    },
    dark: {
      colors: {
        primary: string
      }
    } 
  }
}