import Hidden from '@material-ui/core/Hidden'
import Router from 'next/router'
import Logo from 'src/common/components/DataDisplay/Logo'
import Social from 'src/common/components/DataDisplay/Social'
import User from 'src/common/components/DataDisplay/User'
import Container from 'src/common/components/Foundation/Container'
import Link from 'src/common/components/Navigation/Link'
import MenuMobile from 'src/common/components/Navigation/MenuHamburger'
import { MENU_OPTIONS } from 'src/common/constants/menu'
import CartButton from 'src/modules/commerce/components/CartButton'
import { Flex, FlexList, HeaderBox } from './style'

export default function Header() {
  const menuItems = MENU_OPTIONS.map(option => {
    return (
      <li key={option.id}>
        <Link href={option.link}>{option.label}</Link>
      </li>
    )
  })

  function handleGoToAdmin() {
    Router.push('/admin')
  }

  return (
    <HeaderBox position="sticky">
      <Container>
        <MenuMobile>{menuItems}</MenuMobile>
        <Logo invert href="/" width={50} height={50} />

        <Hidden smDown>
          <FlexList>{menuItems}</FlexList>
        </Hidden>

        <Flex>
          <Hidden smDown>
            <Social />
          </Hidden>
          <CartButton />
          <div onClick={handleGoToAdmin}>
            <User logged />
          </div>
        </Flex>
      </Container>
    </HeaderBox>
  )
}
