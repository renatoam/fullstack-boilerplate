import Hidden from '@material-ui/core/Hidden'
import Menu from '@material-ui/icons/Menu'
import { ReactNode, useState } from 'react'
import { StyledDrawer } from './style'

export default function MenuHamburger({ children }: { children: ReactNode }) {
  const [menuDisplay, setMenuDisplay] = useState(false)

  return (
    <>
      <Hidden mdUp>
        <Menu onClick={() => setMenuDisplay(true)} />
      </Hidden>
      <Hidden mdUp>
        <StyledDrawer
          anchor="right"
          open={menuDisplay}
          onClose={() => setMenuDisplay(false)}
        >
          {children}
        </StyledDrawer>
      </Hidden>
    </>
  )
}
