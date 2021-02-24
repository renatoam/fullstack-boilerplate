import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { HEADING_FONT_SIZES as fontSize } from '../../../constants/css'

export const StyledTypography = styled(Typography)`
  color: #999;
  text-align: center;
  width: 100%;

  &.MuiTypography-${props => props.variant} {
    font-size: ${props => {
      return fontSize[props.variant]
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
