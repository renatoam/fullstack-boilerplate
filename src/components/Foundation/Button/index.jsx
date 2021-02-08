import { StyledButton } from './style'

export default function Button(props) {
  const { children, ...rest } = props

  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  )
}
