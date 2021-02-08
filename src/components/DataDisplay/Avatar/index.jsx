import Image from 'next/image'
import { StyledFigure } from './style'

export default function Avatar(props) {
  const { src, alt, width, height, layout } = props

  return (
    <StyledFigure>
      <Image src={src} alt={alt} width={width} height={height} layout={layout} />
    </StyledFigure>
  )
}

