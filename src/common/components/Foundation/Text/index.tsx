import { StyledTypography } from './style'

export default function Text(props: any) {
  const { variant = 'body1', children } = props

  return <StyledTypography variant={variant}>{children}</StyledTypography>
}
