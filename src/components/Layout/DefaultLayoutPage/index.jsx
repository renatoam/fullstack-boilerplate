import Head from 'next/head'
import PropTypes from 'prop-types'
import { TITLE_PAGE, DESCRIPTION, IMAGE } from '../../../constants/global'
import Breadcrumb from '../../Navigation/Breadcrumb'
import SEO from '../../Configuration/SEO'
import Footer from '../Footer'
import Header from '../Header'
import { StyledMain } from './style'

export default function DefaultPage({ children }) {
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
        {children}
      <Footer />
    </StyledMain>
  )
}

DefaultPage.propTypes = {
  children: PropTypes.element
}
