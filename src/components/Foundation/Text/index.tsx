import { MuiTypographyVariantProps } from '@helpers/interfaces';
import { StyledTypography } from './style';

export default function Text(props: MuiTypographyVariantProps) {
  const { variant = 'body1', children } = props

  return <StyledTypography variant={variant}>{children}</StyledTypography>
}
