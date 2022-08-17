import { ButtonProps } from '@material-ui/core'
import React, { ReactNode } from 'react'

export interface GenericChildrenProps {
  children: ReactNode
}

export interface GenericButtonProps extends ButtonProps {
  handleClick?(event: React.MouseEvent<HTMLButtonElement>): void
}

export interface SkeletonProps {
  variant?: 'circle' | 'rect' | 'text' | undefined
}

export interface ShowcaseProps extends GenericChildrenProps {
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'initial'
    | 'inherit'
}

export interface FilterProps {
  name: string
  options: string[]
  title: string
  handleChange: (value: string) => void
}

export interface SingleOptionProps {
  id: string | number
  title: string
}

export interface OptionsProps {
  options: SingleOptionProps[]
}

export interface SEOProps {
  title: string | undefined
  description: string | undefined
  image: string | undefined
  shouldIndexPage?: boolean
}

export interface DispatchShape<T> {
  type: string
  payload: T
}

export interface Action {
  type: string
  payload?: any
  stateField: string
}

export interface ErrorProps extends GenericChildrenProps {}

export interface ErrorState {
  hasError: boolean
}
