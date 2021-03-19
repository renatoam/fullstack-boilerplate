import ControlButton from '@components/Foundation/ControlButton';
import Heading from '@components/Foundation/Heading';
import Text from '@components/Foundation/Text';
import Image from '@components/Media/Image';
import Link from '@components/Navigation/Link';
import { useCart } from '@context/cart';
import { convertToCurrency } from '@helpers/handleString';
import { ProductData } from '@helpers/interfaces';
import { useState } from 'react';
import { StyledCard } from './style';

export default function CartCard({ data }: { data: ProductData }) {
  const { dispatch } = useCart()
  const { id, title, price, picture, currentQuantity = 0 } = data
  const [value, setValue] = useState(currentQuantity)
  const [error, setError] = useState('')
  const formattedPrice = convertToCurrency(price)

  function handleDispatchAction(action: string) {
    const newValue = action === 'ADD' ? value + 1 : value - 1

    dispatch({ type: action, payload: data })
    setValue(newValue)
  }

  function handleValueByInput(value: number) {
    dispatch({
      type: 'CHANGE',
      payload: {
        ...data,
        newQuantity: value
      }
    })
    setValue(value)
  }

  function handleAddingItems(idAction: string) {
    const action = idAction.toUpperCase()

    if (data.stock === 0) {
      setError('Estoque zerado')
      return
    }

    handleDispatchAction(action)
  }

  function handleRemovingItems(idAction: string) {
    const action = idAction.toUpperCase()

    handleDispatchAction(action)
  }

  return (
    <StyledCard>
      <Link href={`/products/${id}`}>
        <Image
          src={picture}
          width={90}
          height={90}
          variant="circle"
        />
      </Link>
      <Heading variant="h3" clamp={2}>
        {title}
      </Heading>
      <Text>
        {formattedPrice}
      </Text>
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
