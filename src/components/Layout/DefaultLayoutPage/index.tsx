import ErrorBoundary from '@components/Configuration/Error'
import SEO from '@components/Configuration/SEO'
import Breadcrumb from '@components/Navigation/Breadcrumb'
import { DESCRIPTION, IMAGE, TITLE_PAGE } from '@constants/global'
import Head from 'next/head'
import { ReactNode } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { StyledMain } from './style'

export default function DefaultPage({ children }: { children: ReactNode }) {
  return (
    <StyledMain>
      <Head>
        <SEO
          title={TITLE_PAGE}
          description={DESCRIPTION}
          image={IMAGE}
        />
      </Head>
      <Header />
      <Breadcrumb />
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      <Footer />
    </StyledMain>
  )
}
