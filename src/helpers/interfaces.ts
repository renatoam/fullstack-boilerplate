import { ProductDataArray } from '@helpers/types'
import { ButtonProps, TypographyVariant } from '@material-ui/core'
import React, { ReactNode } from 'react'

/**
 * Common
 */
export interface GenericChildrenProps {
  children: ReactNode
}

/**
 * Foundation
 */

export interface GenericButtonProps extends ButtonProps {
  handleClick?(event: React.MouseEvent<HTMLButtonElement>): void
}

export interface BuyButtonProps {
  action: 'ADD' | 'REMOVE' | 'REMOVEALL'
  handleClick(event: React.MouseEvent<HTMLButtonElement>): void
  children: ReactNode
}

export interface BuyButtonOptions {
  [key: string]: {
    icon: React.ReactNode
    variant: 'contained' | 'outlined'
  }
}

export interface ControlButtonProps {
  handleAddingItems: (action: string) => void
  handleRemovingItems: (action: string) => void
  handleChange: (value: number) => void
  value: number
  error: string
}

export interface MuiTypographyVariantProps {
  variant?: TypographyVariant
  children: ReactNode
}

export interface HeadingProps extends MuiTypographyVariantProps {
  component?: ReactNode
  clamp?: number
}
/**
 * Data Display
 */
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

/**
 * Data Entry
 */

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

/**
 * Media
 */

export interface LogoProps {
  invert?: boolean
  href?: string
}

/**
 * Navigation
 */

/**
 * Configuration
 */
export interface SEOProps {
  title: string | undefined
  description: string | undefined
  image: string | undefined
  shouldIndexPage?: boolean
}

/**
 * Context
 */

export interface ProductData {
  id: number
  title: string
  price: number
  picture: string
  description: string
  memory: string
  brand: string
  chipType: string
  quantity: number
  stock: number
  currentQuantity?: number
  newQuantity?: number
}

export interface DispatchShape {
  type: string
  payload: ProductData
}

export interface CartShape {
  cart: ProductDataArray
  dispatch: ({ type, payload }: DispatchShape) => void
}

export interface ProductShape {
  products: ProductDataArray
  getProducts: (filter: string) => void
}

/**
 * Actions
 */

export interface ActionButtonTextShape {
  ADD: 'ADD TO CART' | string
  REMOVE?: 'REMOVE FROM CART' | string
  REMOVEALL?: 'REMOVE FROM CART' | string
}

/**
 * Error Boundary
 */

export interface ErrorProps extends GenericChildrenProps {}

export interface ErrorState {
  hasError: boolean
}

/**
 * Pages
 */

export interface ProductPageProps {
  brands: string[]
  products: ProductDataArray
}

/**
 * Services
 */
