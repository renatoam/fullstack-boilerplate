import Hidden from '@material-ui/core/Hidden'
import Menu from '@material-ui/icons/Menu'
import { useState } from 'react'
import { MENU_OPTIONS } from '../../../constants/menu'
import Logo from '../../DataDisplay/Logo'
import Social from '../../DataDisplay/Social'
import User from '../../DataDisplay/User'
import Image from '../../Media/Image'
import { Container, Flex, FlexList, HeaderBox, MenuMobile } from './style'

export default function Header() {
  const [menuDisplay, setMenuDisplay] = useState(false)
  const menuItems = MENU_OPTIONS.map((option, idx) => <li key={idx}>{option}</li>)

  return (
    <HeaderBox position="sticky">
      <Container>
        <Hidden mdUp>
          <Image svg Component={Menu} onClick={() => setMenuDisplay(true)} />
        </Hidden>
        <Logo invert href="/" />
        <Hidden smDown>
          <FlexList gap="20" case="uppercase">
            {menuItems}
          </FlexList>
        </Hidden>
        <Hidden mdUp>
          <MenuMobile anchor="right" open={menuDisplay} onClose={() => setMenuDisplay(false)}>
            {menuItems}
          </MenuMobile>
        </Hidden>
        <Flex width="150">
          <Social />
          <User logged />
        </Flex>
      </Container>
    </HeaderBox>
  )
}
