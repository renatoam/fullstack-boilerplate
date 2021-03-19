import { ContainerProps } from '@helpers/types'
import { StyledContainer } from './style'

export default function Container(props: ContainerProps) {
  const { children, ...rest } = props

  return (
    <StyledContainer {...rest}>
      {children}
    </StyledContainer>
  )
}
