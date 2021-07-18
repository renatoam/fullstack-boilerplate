import AddCart from '@material-ui/icons/AddShoppingCart'
import RemoveCart from '@material-ui/icons/RemoveShoppingCart'
import { BuyButtonOptions, BuyButtonProps } from 'src/common/types/interfaces'
import Button from '../../../../common/components/Foundation/Button'

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
