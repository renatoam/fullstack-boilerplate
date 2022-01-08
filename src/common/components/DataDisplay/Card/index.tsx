import { useEffect, useState } from 'react'
import { convertToCurrency } from 'src/common/helpers/handleString'
import { useAppDispatch, useAppSelector } from 'src/common/hooks/redux'
import { ActionButtonTextShape, ProductData } from 'src/common/types/interfaces'
import { ActionType } from 'src/common/types/types'

import Heading from '@components/Foundation/Heading'
import Text from '@components/Foundation/Text'
import Image from '@components/Media/Image'
import Link from '@components/Navigation/Link'
import BuyButton from '@modules/commerce/components/BuyButton'
import { decrement, increment, selectCart } from '@modules/commerce/store/cartSlice'

import { StyledCard } from './style'

interface CardProps {
  data: ProductData
}

export default function Card({ data }: CardProps) {
  const { productid, saleprice, productname, images } = data

  const { cart } = useAppSelector(selectCart)
  const dispatch = useAppDispatch()
  const [action, setAction] = useState<ActionType>('ADD')

  const formattedPrice = convertToCurrency(saleprice)

  const buttonText: ActionButtonTextShape = {
    REMOVEALL: 'REMOVE FROM CART',
    ADD: 'ADD TO CART'
  }

  function handleAddingRemovingItems() {
    if (action === 'ADD') {
      dispatch(increment(data))
      setAction('REMOVEALL')
    } else {
      dispatch(decrement(data))
      setAction('ADD')
    }
  }

  useEffect(() => {
    const currentProductIndex = cart.findIndex(product => {
      return product.productid === productid
    })

    if (currentProductIndex > -1) setAction('REMOVEALL')
    else setAction('ADD')
  }, [action, cart])

  return (
    <StyledCard>
      <Link href={`/products/${productid}`}>
        <Image src={images[0]} width={150} height={150} variant="circle" />
      </Link>
      <Heading level={2}>{productname}</Heading>
      <Text>{formattedPrice}</Text>
      <BuyButton action={action} handleClick={handleAddingRemovingItems}>
        {buttonText[action]}
      </BuyButton>
    </StyledCard>
  )
}
