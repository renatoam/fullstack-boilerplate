import { useState } from 'react'
import PropTypes from 'prop-types'
import Menu from '@material-ui/icons/Menu'
import Hidden from '@material-ui/core/Hidden'
import { StyledDrawer } from './style'
import Image from '../../Media/Image'

export default function MenuHamburger({ children }) {
  const [menuDisplay, setMenuDisplay] = useState(false)

  return (
    <>
      <Hidden mdUp>
        <Image svg Component={Menu} onClick={() => setMenuDisplay(true)} />
      </Hidden>
      <Hidden mdUp>
        <StyledDrawer anchor="right" open={menuDisplay} onClose={() => setMenuDisplay(false)}>
          {children}
        </StyledDrawer>
      </Hidden>
    </>
  )
}

MenuHamburger.propTypes = {
  children: PropTypes.any
}
