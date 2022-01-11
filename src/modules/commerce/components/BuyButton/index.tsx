// import AddCart from '@material-ui/icons/AddShoppingCart';
// import RemoveCart from '@material-ui/icons/RemoveShoppingCart';

export default function BuyButton(props: any) {
  const { handleClick, children } = props
  // const options: any = {
  //   ADD: {
  //     icon: <AddCart />,
  //     variant: 'contained'
  //   },
  //   REMOVEALL: {
  //     icon: <RemoveCart />,
  //     variant: 'outlined'
  //   }
  // }

  return (
    <button
      // variant={options[action].variant}
      // startIcon={options[action].icon}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
