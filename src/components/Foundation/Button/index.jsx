import PropTypes from 'prop-types'
import { StyledButton } from './style'

export default function Button(props) {
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

Button.propTypes = {
  variant: PropTypes.string,
  startIcon: PropTypes.element,
  handleClick: PropTypes.func,
  children: PropTypes.any
}
