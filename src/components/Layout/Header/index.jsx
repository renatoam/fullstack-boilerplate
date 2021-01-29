import Logo from '../../DataDisplay/Logo'
import Social from '../../DataDisplay/Social'
import User from '../../DataDisplay/User'
import SearchField from '../../DataEntry/SearchField'
import Breadcrumb from '../../Navigation/Breadcrumb'
import { HeaderBox } from './style'

export default function Header() {
  return (
    <HeaderBox position="sticky">
      <section>
        <Logo />
        <SearchField />
        <Social medias={['facebook', 'instagram', 'linkedin']} />
        <User />
      </section>
      <Breadcrumb />
    </HeaderBox>
  )
}
