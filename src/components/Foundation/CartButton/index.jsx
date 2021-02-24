import { useState } from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import EmptyCart from '../../../../public/icons/empty-cart.svg';
import Heading from '../../Foundation/Heading';
import CartCard from '../../DataDisplay/CartCard'
import { useCart } from '../../../context/cart'
import { EMPTY_CART } from '../../../constants/global'
import { Badge, StyledDrawer } from './style'

export default function CartButton() {
  const { cart } = useCart()
  const [menuDisplay, setMenuDisplay] = useState(false)

  return (
    <>
     <IconButton
      color="inherit"
      aria-label="add to shopping cart"
      onClick={() => setMenuDisplay(true)}
    >
      <ShoppingCart />
      {cart.length > 0 && <Badge>{cart.length}</Badge>}
    </IconButton>
    <StyledDrawer
      anchor="right"
      open={menuDisplay}
      onClose={() => setMenuDisplay(false)}
    >
      {cart.length ? cart.map(product => {
        return (
          <CartCard
            key={product.id}
            data={product}
          />
        )
      }) : (
        <>
          <Heading variant="h2">
            {EMPTY_CART}
          </Heading>
          <EmptyCart />
        </>
      )}
    </StyledDrawer>
    </>
  )
}

CartButton.propTypes = {
  children: PropTypes.any
}
