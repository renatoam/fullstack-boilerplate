import DoubleArrowIcon from '@material-ui/icons/DoubleArrow'
import { ReactNode } from 'react'
import styled from 'styled-components'

const Main = styled.main`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const Image = styled.figure`
  width: 40%;

  img {
    width: 100%;
  }
`

const Scroll = styled(DoubleArrowIcon)`
  cursor: pointer;

  &.MuiSvgIcon-root {
    fill: ${props => props.theme.colors.backgroundLight};
    width: ${props => props.theme.sizes.xxlarge};
    height: ${props => props.theme.sizes.xxlarge};
    transform: rotate(90deg);
  }
`

function Hero({ children }: { children: ReactNode }) {
  return <Main>{children}</Main>
}

Hero.Main = Main
Hero.Image = Image
Hero.Scroll = Scroll

export default Hero
