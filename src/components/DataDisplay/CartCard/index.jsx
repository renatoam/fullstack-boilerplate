import PropTypes from 'prop-types';
import Link from 'next/link'
import Heading from '../../Foundation/Heading';
import Text from '../../Foundation/Text';
import ControlButton from '../../Foundation/ControlButton';
import Image from '../../Media/Image'
import { StyledCard } from './style';
import { useState } from 'react';
import { useCart } from '../../../context/cart'
import { convertToCurrency } from '../../../helpers/handleString'

export default function CartCard({ data }) {
  const { dispatch } = useCart()
  const { id, title, price, picture, currentQuantity } = data
  const [value, setValue] = useState(currentQuantity)
  const [error, setError] = useState('')
  const formattedPrice = convertToCurrency(price)

  function handleDispatchAction(action) {
    const newValue = action === 'ADD' ? value + 1 : value - 1
    dispatch({ type: action, payload: data })
    setValue(newValue)
  }

  function handleValueByInput(value) {
    dispatch({
      type: 'CHANGE',
      payload: {
        ...data,
        newQuantity: value
      }
    })
    setValue(value)
  }

  function handleAddingItems(idAction) {
    const action = idAction.toUpperCase()

    if (data.stock === 0) {
      setError('Estoque zerado')
      return
    }

    handleDispatchAction(action)
  }

  function handleRemovingItems(idAction) {
    const action = idAction.toUpperCase()

    handleDispatchAction(action)
  }

  return (
    <StyledCard>
      <Link href={`/products/${id}`}>
        <a>
          <Image
            imageSrc={picture}
            width={90}
            height={90}
            variant="circle"
          />
        </a>
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

CartCard.propTypes = {
  data: PropTypes.object
}
