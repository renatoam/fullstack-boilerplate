import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from '../../Media/Image';
import { StyledFigure } from './style';

export default function Logo(props) {
  const { invert, href } = props

  return (
    <StyledFigure invert={invert}>
      <Link href={href}>
        <a>
          <Image src="/images/just-logo-white.png" width={100} height={30} layout="responsive" />
        </a>
      </Link>
    </StyledFigure>
  )
}

Logo.propTypes = {
  invert: PropTypes.bool,
  href: PropTypes.string
}
