import { FALLBACK_IMAGE } from '@constants/global';
import { ImageProps } from '@helpers/types';
import Skeleton from '@material-ui/lab/Skeleton';
import NextImage from 'next/image';
import { useImage } from 'react-image';

export default function Image(props: ImageProps) {
  const { src: imageSrc, variant = "rect", ...rest } = props

  const { src: libSrc, isLoading } = useImage({
    srcList: [imageSrc, FALLBACK_IMAGE],
    useSuspense: false
  })

  const src = libSrc || FALLBACK_IMAGE

  if (isLoading) return <Skeleton variant={variant} />

  return (
    <NextImage
      {...rest}
      src={src}
    />
  )
}
