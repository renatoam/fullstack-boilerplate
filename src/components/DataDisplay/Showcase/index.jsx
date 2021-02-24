import { StyledShowcase } from './style';
import PropTypes from 'prop-types'

export default function Showcase(props) {
  const { children, ...rest } = props

  return <StyledShowcase {...rest}>{children}</StyledShowcase>
}

Showcase.propTypes = {
  children: PropTypes.any
}
