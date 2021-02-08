import Link from 'next/link';
import LogoSVG from '../../../assets/icons/logo.svg';
import Image from '../../Media/Image';
import { StyledFigure } from "./style";

export default function Logo(props) {
  const { invert, href } = props

  return (
    <StyledFigure invert={invert}>
      <Link href={href}>
        <a>
          <Image type="svg" Component={LogoSVG} />
        </a>
      </Link>
    </StyledFigure>
  )
}
