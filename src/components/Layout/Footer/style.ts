import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin-top: auto;

  p, a {
    color: #FFF;
    text-align: center;
  }
`
