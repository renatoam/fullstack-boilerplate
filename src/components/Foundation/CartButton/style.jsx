import styled from 'styled-components'
import Drawer from '@material-ui/core/Drawer'

export const Badge = styled.span`
  border-radius: 50%;
  background-color: #FC4A40;
  color: inherit;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content:  center;
  height: 20px;
  width: 20px;
  transform: translate(-50%,-50%);
  position: absolute;
  left: 70%;
  top: 20%;
`

export const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    padding: 50px;
    gap: 20px;
    max-width: 500px;
    width: 70vw;
  }

  svg {
    width: 100%;
  }
`
