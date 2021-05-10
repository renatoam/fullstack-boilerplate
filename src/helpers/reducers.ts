import { DispatchShape, ProductData } from '@helpers/interfaces'

export function cartReducer(state: ProductData[], action: DispatchShape) {
  if (action.type === 'ADD') {
    const currentProductIndex = state.findIndex((product: ProductData) => {
      return product.id === action.payload.id
    })

    if (currentProductIndex > -1) {
      const remainsProducts = [...state]

      if (remainsProducts[currentProductIndex].stock === 0) return state

      remainsProducts[currentProductIndex].currentQuantity += 1
      remainsProducts[currentProductIndex].stock -= 1

      return remainsProducts
    }

    const newProduct = {
      ...action.payload,
      stock: action.payload.quantity - 1,
      currentQuantity: 1
    }

    return [...state, newProduct]
  }

  if (action.type === 'REMOVE') {
    const remainsProducts = [...state]
    const currentProductIndex = state.findIndex((product: ProductData) => {
      return product.id === action.payload.id
    })
    if (remainsProducts[currentProductIndex].currentQuantity <= 1) {
      remainsProducts.splice(currentProductIndex, 1)
      return remainsProducts
    }

    remainsProducts[currentProductIndex].currentQuantity -= 1
    remainsProducts[currentProductIndex].stock += 1

    return remainsProducts
  }

  if (action.type === 'REMOVEALL') {
    const remainsProducts = [...state]
    const currentProductIndex = state.findIndex((product: ProductData) => {
      return product.id === action.payload.id
    })

    remainsProducts.splice(currentProductIndex, 1)

    return remainsProducts
  }

  if (action.type === 'CHANGE') {
    const remainsProducts = [...state]
    const currentProductIndex = remainsProducts.findIndex((product: ProductData) => {
      return product.id === action.payload.id
    })
    const newQuantity = action.payload.newQuantity

    if (newQuantity > remainsProducts[currentProductIndex].stock) return
    if (newQuantity === 0) return remainsProducts

    remainsProducts[currentProductIndex].stock =
      remainsProducts[currentProductIndex].quantity - newQuantity
    remainsProducts[currentProductIndex].currentQuantity = newQuantity

    return remainsProducts
  }

  return state
}
