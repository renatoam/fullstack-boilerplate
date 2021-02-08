import { StyledTypography } from "./style";

export default function Heading(props) {
  const { variant, component, text } = props

  return <StyledTypography variant={variant} component={component}>{text}</StyledTypography>
}
