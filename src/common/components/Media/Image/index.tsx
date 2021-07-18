import Skeleton from '@material-ui/lab/Skeleton'
import NextImage from 'next/image'
import { useImage } from 'react-image'
import { FALLBACK_IMAGE } from 'src/common/constants/global'
import { ImageProps } from 'src/common/types/types'

export default function Image(props: ImageProps) {
  const { src: imageSrc, variant = 'rect', ...rest } = props

  const { src: libSrc, isLoading } = useImage({
    srcList: [imageSrc, FALLBACK_IMAGE],
    useSuspense: false
  })

  const src = libSrc || FALLBACK_IMAGE

  if (isLoading) return <Skeleton variant={variant} />

  return <NextImage {...rest} src={src} />
}
