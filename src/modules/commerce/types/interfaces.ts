import React, { ReactNode } from 'react'

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

export interface ProductData {
  url: string
  productname: string
  productid: string
  listingprice: number
  saleprice: number
  discount: number
  brand: string
  description: string
  rating: number
  reviews: number
  images: string[]
  lastvisited: string
}

export interface ActionButtonTextShape {
  ADD: 'ADD TO CART' | string
  REMOVE?: 'REMOVE FROM CART' | string
  REMOVEALL?: 'REMOVE FROM CART' | string
}
