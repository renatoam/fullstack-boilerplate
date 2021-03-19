import Box from '@material-ui/core/Box';
import styled from 'styled-components';

export const StyledFilterContainer = styled.section`
  border-radius: 20px;
  background-color: #EEE;
  height: fit-content;
  padding: 20px;
  min-width: 200px;
  max-width: 300px;
  width: 30vw;
  
  @media (max-width: 768px) {
    max-width: unset;
    min-width: unset;
    width: 100%;
  }
`

export const StyledBox = styled(Box)`
  margin: 10px;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
  }
`
