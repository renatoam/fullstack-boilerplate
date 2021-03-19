import { BuyButtonOptions, BuyButtonProps } from '@helpers/interfaces';
import AddCart from '@material-ui/icons/AddShoppingCart';
import RemoveCart from '@material-ui/icons/RemoveShoppingCart';
import Button from '../Button';

export default function BuyButton(props: BuyButtonProps) {
  const { action, handleClick, children } = props
  const options: BuyButtonOptions = {
    ADD: {
      icon: <AddCart />,
      variant: 'contained'
    },
    REMOVEALL: {
      icon: <RemoveCart />,
      variant: 'outlined'
    }
  }

  return (
    <Button
      variant={options[action].variant}
      startIcon={options[action].icon}
      handleClick={handleClick}
    >
      {children}
    </Button>
  )
}
