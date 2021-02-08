import TextField from '@material-ui/core/TextField';
import Close from '@material-ui/icons/Close';
import Autocomplete from '@material-ui/lab/Autocomplete';
import styled from 'styled-components';

export const StyledAutocomplete = styled(Autocomplete)`
  .MuiAutocomplete-endAdornment {
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 100%;
  }

  .MuiAutocomplete-clearIndicator {
    width: 100%;
    height: 100%;
  }
`

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
