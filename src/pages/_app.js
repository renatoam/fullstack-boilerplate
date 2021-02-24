import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import NextNprogress from 'nextjs-progressbar';
import Page from '../components/Layout/DefaultLayoutPage';
import { ProductsProvider } from '../context/products';
import { CartProvider } from '../context/cart';
import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/themes';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height="6"
        options={{ showSpinner: false }}
      />
      <ThemeProvider theme={theme}>
        <ProductsProvider>
          <CartProvider>
            <Page>
              <Component {...pageProps} />
            </Page>
          </CartProvider>
        </ProductsProvider>
      </ThemeProvider>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
}
