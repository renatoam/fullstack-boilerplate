import Breadcrumb from '../../Navigation/Breadcrumb'
import Footer from '../Footer'
import Header from '../Header'

export default function DefaultPage({ children }) {
  return (
    <>
      <Header />
      <Breadcrumb />
        {children}
      <Footer />
    </>
  )
}
