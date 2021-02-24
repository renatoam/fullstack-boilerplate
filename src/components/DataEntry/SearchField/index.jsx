import TextField from '@material-ui/core/TextField';
import Close from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import Router from 'next/router'
import { StyledAutocomplete } from './style';

export default function SearchField(props) {
  const { options } = props

  function handleDisplayOptionsRule(option) {
    return `${option.id} || ${option.title}`
  }

  function handleChange(value) {
    const idProduct = value.split(' || ')[0]

    Router.push(`/products/${idProduct}`)
  }

  return (
    <StyledAutocomplete
      id="searchProducts"
      freeSolo
      closeIcon={<Close />}
      options={options.map((option) => handleDisplayOptionsRule(option))}
      onChange={(_, value) => handleChange(value)}
      renderInput={(params) => (
        <TextField {...params} label="Products" margin="normal" variant="outlined" />
      )}
    />
  )
}

SearchField.propTypes = {
  options: PropTypes.array,
  handleChange: PropTypes.func
}
