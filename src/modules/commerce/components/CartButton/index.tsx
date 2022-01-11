import Router from 'next/router'
import { useState } from 'react'

import IconButton from '@material-ui/core/IconButton'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import CartCard from '@modules/commerce/components/CartCard'
import { useCart } from '@modules/commerce/contexts/cart'

import { Badge, StyledDrawer } from './style'

export default function CartButton() {
  const { cart } = useCart()
  const [menuDisplay, setMenuDisplay] = useState(false)

  function handleGoToCommerce() {
    Router.push('/commerce')
  }

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="add to shopping cart"
        // onClick={() => setMenuDisplay(true)}
        onClick={handleGoToCommerce}
      >
        <ShoppingCart />
        {cart.length > 0 && <Badge>{cart.length}</Badge>}
      </IconButton>
      <StyledDrawer anchor="right" open={menuDisplay} onClose={() => setMenuDisplay(false)}>
        {cart.length ? (
          cart.map((product: any, index: any) => {
            return <CartCard key={index} data={product} />
          })
        ) : (
          <>
            {/* <Heading level={2}>{EMPTY_CART}</Heading> */}
            {/* <Image
            src={EMPTY_CART_ICON} 
            width={20} height={20} 
            layout="responsive" /> */}
          </>
        )}
      </StyledDrawer>
    </>
  )
}
