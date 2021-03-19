import { LinkProps } from '@material-ui/core';
import NextLink from 'next/link';

export default function Link(props: LinkProps) {
  const { href = '#', children } = props
  
  return (
    <NextLink href={href}>
      <a>
        {children}
      </a>
    </NextLink>
  )
}