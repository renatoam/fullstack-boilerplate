import Hidden from '@material-ui/core/Hidden'
import Link from 'next/link'
import { MENU_OPTIONS } from '../../../constants/menu'
import Logo from '../../DataDisplay/Logo'
import Social from '../../DataDisplay/Social'
import User from '../../DataDisplay/User'
import MenuMobile from '../../Navigation/MenuHamburger'
import CartButton from '../../Foundation/CartButton'
import Container from '../../Foundation/Container'
import { Flex, FlexList, HeaderBox } from './style'

export default function Header() {
  const menuItems = MENU_OPTIONS.map(option => {
    return (
      <li key={option.id}>
        <Link href={option.link}>
          <a>
            {option.label}
          </a>
        </Link>
      </li>
    )
  })

  return (
    <HeaderBox position="sticky">
      <Container>
        <MenuMobile>
          {menuItems}
        </MenuMobile>
        <Logo invert href="/" />

        <Hidden smDown>
          <FlexList>
            {menuItems}
          </FlexList>
        </Hidden>

        <Flex>
          <Hidden smDown>
            <Social />
          </Hidden>
          <CartButton />
          <User logged />
        </Flex>
      </Container>
    </HeaderBox>
  )
}
