import Page from '@components/Layout/DefaultLayoutPage'
import { CartProvider } from '@context/cart'
import { ProductsProvider } from '@context/products'
import { GlobalStyle } from '@styles/global'
import { theme } from '@styles/themes'
import { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'
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
