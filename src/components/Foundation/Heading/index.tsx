import { HeadingProps } from '@helpers/interfaces';
import { StyledTypography } from './style';

export default function Heading(props: HeadingProps) {
  const { variant = 'h1', component, clamp, children, ...rest } = props
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
