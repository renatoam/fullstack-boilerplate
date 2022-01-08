import Router from 'next/router'
import { MENU_OPTIONS } from 'src/common/constants/menu'

import Logo from '@components/DataDisplay/Logo'
import Social from '@components/DataDisplay/Social'
import User from '@components/DataDisplay/User'
import Container from '@components/Foundation/Container'
import Link from '@components/Navigation/Link'
import MenuMobile from '@components/Navigation/MenuHamburger'
import Hidden from '@material-ui/core/Hidden'
import CartButton from '@modules/commerce/components/CartButton'

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
