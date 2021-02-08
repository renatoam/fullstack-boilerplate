import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Page from '../components/Layout/DefaultLayoutPage';
import { CustomersProvider } from "../context/customers";
import { GlobalStyle } from '../styles/global';

const theme = {
  colors: {
    primary: '#0070f3'
  }
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <CustomersProvider>
          <Page>
            <Component {...pageProps} />
          </Page>
        </CustomersProvider>
      </ThemeProvider>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
}
