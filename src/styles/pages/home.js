import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  padding: 10px;
  height: ${props => props.format === 'google' ? 'calc(100vh - 180px)' : 'auto'};
  width: ${props => props.format === 'google' ? '50vw' : 'auto'};

  .MuiAutocomplete-root {
    width: 100%;
  }

  svg {
  justify-content: center;
  display: flex;
  margin: 50px;
  width: 150px;
  cursor: pointer;
}
`
