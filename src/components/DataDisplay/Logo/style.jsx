import styled from 'styled-components'

export const StyledFigure = styled.figure`
  width: 150px;

  svg {
    width: 100%;

    .cls-1 {
      fill: ${props => props.invert ? '#FFF' : 'inherit'};
    }
  }
`
