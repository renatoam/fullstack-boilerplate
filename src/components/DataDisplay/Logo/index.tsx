import Image from '@components/Media/Image'
import Link from '@components/Navigation/Link'
import { LOGO_PATH } from '@constants/global'
import { StyledFigure } from './style'

interface LogoProps {
  src?: string
  invert?: boolean
  href?: string
  width?: number | string
  height?: number | string
  alt?: string
}

export default function Logo(props: LogoProps) {
  const { src, width = 50, height = 50, invert, href, alt } = props
  const LOGO = src || LOGO_PATH

  return (
    <StyledFigure invert={invert}>
      <Link href={href}>
        <Image src={LOGO} width={width} height={height} layout="responsive" alt={alt} />
      </Link>
    </StyledFigure>
  )
}
