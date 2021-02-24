import PropTypes from 'prop-types'
import Button from '../Button'
import RemoveCart from '@material-ui/icons/RemoveShoppingCart';
import AddCart from '@material-ui/icons/AddShoppingCart';

export default function BuyButton(props) {
  const { action, handleClick, children } = props
  const options = {
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
      onClick={handleClick}
    >
      {children}
    </Button>
  )
}

BuyButton.propTypes = {
  action: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.any
}
