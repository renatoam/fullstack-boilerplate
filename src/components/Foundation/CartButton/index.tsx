import CartCard from '@components/DataDisplay/CartCard';
import Image from '@components/Media/Image';
import { EMPTY_CART, EMPTY_CART_ICON } from '@constants/global';
import { useCart } from '@context/cart';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { useState } from 'react';
import Heading from '../Heading';
import { Badge, StyledDrawer } from './style';

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
          <Image src={EMPTY_CART_ICON} width={20} height={20} layout="responsive" />
        </>
      )}
    </StyledDrawer>
    </>
  )
}
