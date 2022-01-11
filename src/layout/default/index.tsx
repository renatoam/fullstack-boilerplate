import Head from 'next/head'
import { ReactNode } from 'react'
import { DESCRIPTION, IMAGE, TITLE_PAGE } from 'src/common/constants/global'

import ErrorBoundary from '@components/Configuration/Error'
import SEO from '@components/Configuration/SEO'

import { StyledMain } from './style'

export default function DefaultPage({ children }: { children: ReactNode }) {
  return (
    <StyledMain>
      <Head>
        <SEO title={TITLE_PAGE} description={DESCRIPTION} image={IMAGE} />
      </Head>
      <header>Header</header>
      <div>breadcrumb</div>
      <ErrorBoundary>{children}</ErrorBoundary>
      <footer>footer</footer>
    </StyledMain>
  )
}
