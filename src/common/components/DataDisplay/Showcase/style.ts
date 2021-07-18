import { ShowcaseProps } from 'src/common/types/interfaces'
import styled from 'styled-components'

export const StyledShowcase = styled.section<ShowcaseProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.justify};
  gap: 20px;
  width: 100%;
`
