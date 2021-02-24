import { StyledTypography } from './style';
import PropTypes from 'prop-types'

export default function Heading(props) {
  const { variant, component, clamp, children, ...rest } = props
  const className = clamp ? 'clamp' : ''

  return (
    <StyledTypography
      variant={variant}
      component={component}
      clamp={clamp}
      className={className}
      {...rest}
    >
      {children}
    </StyledTypography>
  )
}

Heading.propTypes = {
  variant: PropTypes.string,
  component: PropTypes.element,
  clamp: PropTypes.number,
  children: PropTypes.any
}
