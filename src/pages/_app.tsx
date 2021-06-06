import Page from '@components/Layout/DefaultLayoutPage'
import { AuthProvider } from '@context/auth'
import { ProductsProvider } from '@context/products'
import { store } from '@store/index'
import { GlobalStyle } from '@styles/global'
import { theme } from '@styles/themes'
import { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={6}
        options={{ showSpinner: false }}
      />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AuthProvider>
            <ProductsProvider>
              <Page>
                <Component {...pageProps} />
              </Page>
            </ProductsProvider>
          </AuthProvider>
        </Provider>
      </ThemeProvider>
    </>
  )
}
