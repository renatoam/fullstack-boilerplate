import Image from '@components/Media/Image';
import Link from '@components/Navigation/Link';
import { LogoProps } from '@helpers/interfaces';
import { StyledFigure } from './style';

export default function Logo(props: LogoProps) {
  const { invert, href } = props
  const LOGO = process.env.LOGO_PATH || '#'

  return (
    <StyledFigure invert={invert}>
      <Link href={href}>
          <Image src={LOGO} width={80} height={20} layout="responsive" />
      </Link>
    </StyledFigure>
  )
}
