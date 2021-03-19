import { HEADING_FONT_SIZES as fontSize } from '@constants/css';
import { HeadingProps } from '@helpers/interfaces';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export const StyledTypography = styled(Typography)<HeadingProps>`
  color: #999;
  text-align: center;
  width: 100%;

  &.MuiTypography-${props => props.variant} {
    font-size: ${({ variant = 'h1' }) => {
      return fontSize[variant]
    }}
  }

  &.clamp {
    -webkit-line-clamp: ${props => props.clamp};
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
`
