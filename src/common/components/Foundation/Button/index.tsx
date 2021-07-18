import { GenericButtonProps } from 'src/common/types/interfaces'
import { StyledButton } from './style'

export default function Button(props: GenericButtonProps) {
  const { variant, startIcon, color, handleClick, children, ...rest } = props

  return (
    <StyledButton variant={variant} startIcon={startIcon} onClick={handleClick} {...rest}>
      {children}
    </StyledButton>
  )
}
