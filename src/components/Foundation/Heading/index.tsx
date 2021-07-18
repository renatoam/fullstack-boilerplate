import { theme } from '@styles/themes'
import styled, { css } from 'styled-components'
interface HeadingProps {
  color?: keyof typeof theme.colors
  size?: keyof typeof theme.sizes
  fontWeight?: 100 | 400 | 700
  lineHeight?: string | number
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

const Heading = styled('h1').attrs<HeadingProps>(({ level }) => ({
  as: `h${level}`
}))<HeadingProps>`
  ${({ color = 'textPrimary', size = 'normal', fontWeight = 400, lineHeight = 1 }) => css`
    font-size: ${theme.sizes[size]};
    color: ${theme.colors[color]};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
  `}
`

export default Heading
