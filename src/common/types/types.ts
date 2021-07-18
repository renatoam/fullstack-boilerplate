import { ContainerProps as MuiContainerProps } from '@material-ui/core/Container'
import { ImageProps as NextImageProps } from 'next/image'
import { SkeletonProps } from 'src/common/types/interfaces'

export type ContainerProps = MuiContainerProps & {
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse'
}

export type ListProps = ContainerProps & {}

export type ImageProps = NextImageProps & SkeletonProps

export type RequestErrors = { [key: string]: string | { [key: string]: string }[] }
