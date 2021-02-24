import MuiContainer from '@material-ui/core/Container'
import styled from 'styled-components'

export const StyledContainer = styled(MuiContainer)`
  &.MuiContainer-root {
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    margin: auto;
    max-width: 1280px;
    width: 100%;
  }
`
