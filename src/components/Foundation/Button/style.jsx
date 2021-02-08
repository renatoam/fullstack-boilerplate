import MuiButton from '@material-ui/core/Button';
import styled from 'styled-components';

export const StyledButton = styled(MuiButton)`
  &.MuiButton-root {
    background-color: #005F9F;
    margin: 10px;

    &:hover {
      background-color: #0376B3;
    }

    a {
      color: #fff;
    }
  }
`
