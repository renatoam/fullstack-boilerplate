import { useState } from 'react'
import Heading from 'src/common/components/Foundation/Heading'
import Text from 'src/common/components/Foundation/Text'
import Image from 'src/common/components/Media/Image'
import Link from 'src/common/components/Navigation/Link'
import { convertToCurrency } from 'src/common/helpers/handleString'
import { ProductData } from 'src/common/types/interfaces'
import ControlButton from 'src/modules/commerce/components/ControlButton'
import { useCart } from 'src/modules/commerce/contexts/cart'
import { StyledCard } from './style'

export default function CartCard({ data }: { data: ProductData }) {
  const { dispatch } = useCart()
  const { productid, productname, saleprice, images } = data
  const [value, setValue] = useState(0)
  const [error] = useState('')
  const formattedPrice = convertToCurrency(saleprice)

  function handleDispatchAction(action: string) {
    const newValue = action === 'ADD' ? value + 1 : value - 1

    dispatch({ type: action, payload: data })
    setValue(newValue)
  }

  function handleValueByInput(value: number) {
    dispatch({
      type: 'CHANGE',
      payload: {
        ...data
        // newQuantity: value
      }
    })
    setValue(value)
  }

  function handleAddingItems(idAction: string) {
    const action = idAction.toUpperCase()

    // if (data.stock === 0) {
    //   setError('Estoque zerado')
    //   return
    // }

    handleDispatchAction(action)
  }

  function handleRemovingItems(idAction: string) {
    const action = idAction.toUpperCase()

    handleDispatchAction(action)
  }

  return (
    <StyledCard>
      <Link href={`/products/${productid}`}>
        <Image src={images[0]} width={90} height={90} variant="circle" />
      </Link>
      <Heading level={3}>{productname}</Heading>
      <Text>{formattedPrice}</Text>
      <ControlButton
        value={value}
        error={error}
        handleAddingItems={handleAddingItems}
        handleRemovingItems={handleRemovingItems}
        handleChange={handleValueByInput}
      />
    </StyledCard>
  )
}
