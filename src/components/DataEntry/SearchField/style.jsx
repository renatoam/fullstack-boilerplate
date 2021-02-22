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
