import TextField from '@material-ui/core/TextField';
import Close from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import { StyledAutocomplete } from './style';

export default function SearchField(props) {
  const { options, rule } = props

  return (
    <StyledAutocomplete
      id="free-solo-demo"
      freeSolo
      closeIcon={<Close />}
      options={options.map((option) => rule(option))}
      renderInput={(params) => (
        <TextField {...params} label="Customers" margin="normal" variant="outlined" />
      )}
    />
  )
}

SearchField.propTypes = {
  options: PropTypes.array,
  rule: PropTypes.func
}
