import styled from 'styled-components'

interface IStyledBreadcrumb {
  currentTheme?: string
}

export const StyledBreadcrumb = styled.section<IStyledBreadcrumb>`
  padding: 20px;
  background-color: ${props => (!props.currentTheme ? 'inherit' : props.currentTheme)};

  p {
    color: #999;
    font-weight: bold;
    text-transform: uppercase;
  }
`

export const Flex = styled.div`
  display: flex;
  gap: 10px;
`
