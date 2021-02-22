import Head from 'next/head'
import PropTypes from 'prop-types'
import { TITLE_PAGE } from '../../../constants/global'
import Breadcrumb from '../../Navigation/Breadcrumb'
import Footer from '../Footer'
import Header from '../Header'

export default function DefaultPage({ children }) {
  return (
    <>
      <Head>
        <title>{TITLE_PAGE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&amp;display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://justdigital.com.br/favicon-32x32.c642d605.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://justdigital.com.br/favicon-16x16.cd7bdeaf.png" />
      </Head>
      <Header />
      <Breadcrumb />
        {children}
      <Footer />
    </>
  )
}

DefaultPage.propTypes = {
  children: PropTypes.element
}
