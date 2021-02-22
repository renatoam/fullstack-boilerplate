import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Page from '../components/Layout/DefaultLayoutPage';
import { ProductsProvider } from '../context/products';
import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/themes';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ProductsProvider>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ProductsProvider>
      </ThemeProvider>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
}
