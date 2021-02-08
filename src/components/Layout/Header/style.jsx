import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import styled from 'styled-components'

export const HeaderBox = styled(AppBar)`
  align-items: center;
  background-color: #001829 !important;
  background-image: url('/static/images/pattern.png');
  background-repeat: repeat-x;
  background-size: 200px;
  display: flex;
  height: 80px;
  justify-content: center;
`

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin: auto;
  max-width: 1280px;
  width: 100%;
`

export const Flex = styled.section`
  display: flex;
  justify-content: space-between;
  width: ${({ width }) => width + 'px' || 'auto'};
`

export const FlexList = styled.ul`
  display: flex;
  flex-direction: ${props => props.vertical ? 'column' : 'row'};
  gap: ${({ gap }) => gap + 'px' || 'unset'};

  li {
    text-transform: ${props => props.case || 'unset'};
    font-weight: 600;
  }
`

export const MenuMobile = styled(Drawer)`
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
