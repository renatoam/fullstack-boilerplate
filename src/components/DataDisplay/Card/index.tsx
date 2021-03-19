import BuyButton from '@components/Foundation/BuyButton';
import Heading from '@components/Foundation/Heading';
import Text from '@components/Foundation/Text';
import Image from '@components/Media/Image';
import Link from '@components/Navigation/Link';
import { useCart } from '@context/cart';
import { convertToCurrency } from '@helpers/handleString';
import { ActionButtonTextShape, ProductData } from '@helpers/interfaces';
import { ActionType } from '@helpers/types';
import { useEffect, useState } from 'react';
import { StyledCard } from './style';

export default function Card({ data }: { data: ProductData}) {
  const { id, title, price, picture } = data

  const { cart, dispatch } = useCart()
  const [action, setAction] = useState<ActionType>('ADD')

  const formattedPrice = convertToCurrency(price)
  
  const buttonText: ActionButtonTextShape = {
    REMOVEALL: 'REMOVE FROM CART',
    ADD: 'ADD TO CART'
  }

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
        <Image
          src={picture}
          width={150}
          height={150}
          variant="circle"
        />
      </Link>
      <Heading variant="h3" clamp={3}>
        {title}
      </Heading>
      <Text>
        {formattedPrice}
      </Text>
      <BuyButton action={action} handleClick={handleAddingRemovingItems}>
        {buttonText[action]}
      </BuyButton>
    </StyledCard>
  )
}
