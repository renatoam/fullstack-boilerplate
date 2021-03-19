import Drawer from '@material-ui/core/Drawer'
import styled from 'styled-components'

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
