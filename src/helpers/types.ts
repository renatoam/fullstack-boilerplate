import { SkeletonProps } from '@helpers/interfaces'
import { ContainerProps as MuiContainerProps } from '@material-ui/core/Container'
import { ImageProps as NextImageProps } from 'next/image'

export type ActionType = 'ADD' | 'REMOVE' | 'REMOVEALL'

export type ContainerProps =  MuiContainerProps & {
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
}

export type ListProps = ContainerProps & {}

export type ImageProps = NextImageProps & SkeletonProps