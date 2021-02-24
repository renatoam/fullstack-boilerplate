import { StyledContainer } from './style'
import PropTypes from 'prop-types'

export default function Container(props) {
  const { children, ...rest } = props

  return (
    <StyledContainer {...rest}>
      {children}
    </StyledContainer>
  )
}

Container.propTypes = {
  column: PropTypes.bool,
  children: PropTypes.any
}
