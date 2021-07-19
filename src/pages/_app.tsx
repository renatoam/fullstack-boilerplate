import { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'
import { Provider } from 'react-redux'
import 'src/app/helpers/translate'
import { GlobalStyle } from 'src/app/styles/global'
import { theme } from 'src/app/styles/themes'
import { store } from 'src/common/store/index'
import Layout from 'src/layout/default'
import { AuthProvider } from 'src/modules/auth/contexts/auth'
import { ProductsProvider } from 'src/modules/commerce/contexts/products'
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
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ProductsProvider>
          </AuthProvider>
        </Provider>
      </ThemeProvider>
    </>
  )
}
