import TextField from '@material-ui/core/TextField'
import Close from '@material-ui/icons/Close'
import Router from 'next/router'
import { OptionsProps, SingleOptionProps } from 'src/common/types/interfaces'
import { StyledAutocomplete } from './style'

export default function SearchField({ options }: OptionsProps) {
  function handleDisplayOptionsRule(option: SingleOptionProps) {
    return `${option.id} || ${option.title}`
  }

  function handleChange(value: unknown) {
    if (typeof value !== 'string') return

    const idProduct = value.split(' || ')[0]

    Router.push(`/products/${idProduct}`)
  }

  return (
    <StyledAutocomplete
      id="searchProducts"
      freeSolo
      closeIcon={<Close />}
      options={options.map(option => handleDisplayOptionsRule(option))}
      onChange={(_, value) => handleChange(value)}
      renderInput={params => (
        <TextField {...params} label="Products" margin="normal" variant="outlined" />
      )}
    />
  )
}
