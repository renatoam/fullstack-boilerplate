import { ListProps } from '@helpers/types'
import AppBar from '@material-ui/core/AppBar'
import styled from 'styled-components'

export const HeaderBox = styled(AppBar)`
  &.MuiAppBar-root {
    align-items: center;
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    height: 80px;
    justify-content: center;
  }
`

export const Flex = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 150px;
`

export const FlexList = styled.ul<ListProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  gap: 20px;

  li {
    text-transform: uppercase;
    font-weight: 600;
  }
`
