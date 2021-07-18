import { ShowcaseProps } from 'src/common/types/interfaces'
import { StyledShowcase } from './style'

export default function Showcase(props: ShowcaseProps) {
  const { justify, children, ...rest } = props

  return (
    <StyledShowcase justify={justify} {...rest}>
      {children}
    </StyledShowcase>
  )
}
