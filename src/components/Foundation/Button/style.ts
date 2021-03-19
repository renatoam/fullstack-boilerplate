import { VariantMuiButtonProps } from '@helpers/interfaces';
import MuiButton from '@material-ui/core/Button';
import styled from 'styled-components';

export const StyledButton = styled(MuiButton)<VariantMuiButtonProps>`
  &.MuiButton-root {
    background-color: ${props => {
      return props.variant === 'contained'
        ? props.theme.colors.primary
        : '#fff'
    }};
    border: ${props => {
      return props.variant === 'outlined'
        ? '1px solid ' + props.theme.colors.primary
        : '#fff'
    }};
    color: ${props => {
      return props.variant === 'contained'
        ? props.theme.colors.secondary
        : props.theme.colors.primary
    }};
    display: flex;
    font-size: .8rem;
    margin: 10px;
    max-height: 32px;
    min-width: 170px;
    transition: all 0.4s ease-in-out;

    &:hover {
      background-color: ${props => {
        return props.variant === 'contained'
        ? props.theme.colors.primaryHover
        : props.theme.colors.secondaryHover
      }};
    }

    a {
      color: #fff;
    }
  }
`
