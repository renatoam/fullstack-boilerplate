import PropTypes from 'prop-types';
import Link from 'next/link'
import Heading from '../../Foundation/Heading';
import Text from '../../Foundation/Text';
import BuyButton from '../../Foundation/BuyButton';
import Image from '../../Media/Image'
import { StyledCard } from './style';
import { useState, useEffect } from 'react';
import { useCart } from '../../../context/cart'
import { convertToCurrency } from '../../../helpers/handleString'

export default function Card({ data }) {
  const { cart, dispatch } = useCart()
  const { id, title, price, picture } = data
  const [action, setAction] = useState('ADD')
  const formattedPrice = convertToCurrency(price)
  const buttonText = action === 'REMOVEALL'
    ? 'REMOVE FROM CART' : 'ADD TO CART'

  function handleActions() {
    const newAction = action === 'ADD' ? 'REMOVEALL' : 'ADD'
    setAction(newAction)
  }

  function handleAddingRemovingItems() {
    dispatch({ type: action, payload: data })
    handleActions()
  }

  useEffect(() => {
    const currentProductIndex = cart.findIndex(product => {
      return product.id === id
    })

    if (currentProductIndex > -1) setAction('REMOVEALL')
    else setAction('ADD')
  }, [action, cart])

  return (
    <StyledCard>
      <Link href={`/products/${id}`}>
        <a>
          <Image
            imageSrc={picture}
            width={150}
            height={150}
            variant="circle"
          />
        </a>
      </Link>
      <Heading variant="h3" clamp={3}>
        {title}
      </Heading>
      <Text>
        {formattedPrice}
      </Text>
      <BuyButton action={action} handleClick={handleAddingRemovingItems}>
        {buttonText}
      </BuyButton>
    </StyledCard>
  )
}

Card.propTypes = {
  data: PropTypes.object
}
