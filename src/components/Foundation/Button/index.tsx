import { ButtonProps } from '@helpers/interfaces'
import { StyledButton } from './style'

export default function Button(props: ButtonProps) {
  const { variant = 'contained', startIcon, handleClick, children, ...rest } = props

  return (
    <StyledButton
      variant={variant}
      startIcon={startIcon}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}
