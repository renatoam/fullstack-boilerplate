import Head from 'next/head'
import { ReactNode } from 'react'
import ErrorBoundary from 'src/common/components/Configuration/Error'
import SEO from 'src/common/components/Configuration/SEO'
import { DESCRIPTION, IMAGE, TITLE_PAGE } from 'src/common/constants/global'
import Breadcrumb from 'src/layout/core/Breadcrumb'
import Footer from '../core/Footer'
import Header from '../core/Header'
import { StyledMain } from './style'

export default function DefaultPage({ children }: { children: ReactNode }) {
  return (
    <StyledMain>
      <Head>
        <SEO title={TITLE_PAGE} description={DESCRIPTION} image={IMAGE} />
      </Head>
      <Header />
      <Breadcrumb />
      <ErrorBoundary>{children}</ErrorBoundary>
      <Footer />
    </StyledMain>
  )
}
