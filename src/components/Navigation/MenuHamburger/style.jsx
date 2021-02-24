import styled from 'styled-components'
import Drawer from '@material-ui/core/Drawer'

export const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 60%;
    padding: 20px;
    gap: 20px;
  }

  li {
    font-weight: bold;
    text-transform: uppercase;
  }
`
