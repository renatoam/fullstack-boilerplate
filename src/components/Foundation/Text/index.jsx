import { StyledTypography } from './style';
import PropTypes from 'prop-types'

export default function Text(props) {
  const { variant = 'body1', children } = props

  return <StyledTypography variant={variant}>{children}</StyledTypography>
}

Text.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.any
}
