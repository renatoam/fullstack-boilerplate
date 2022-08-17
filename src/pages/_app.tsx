import '@helpers/translate'

import { GlobalStyle } from '@common/styles/global'
import { theme } from '@common/styles/themes'
import { store } from '@store/index'
import { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'
import { Provider } from 'react-redux'
import Layout from 'src/layout/default'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from '@modules/auth/contexts/auth'
import { ProductsProvider } from '@modules/commerce/contexts/products'

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
