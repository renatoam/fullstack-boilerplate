import { ContainerProps } from 'src/common/types/types'
import { StyledContainer } from './style'

export default function Container(props: ContainerProps) {
  const { children, ...rest } = props

  return <StyledContainer {...rest}>{children}</StyledContainer>
}
