import styled from 'styled-components'

export const StyledCard = styled.section`
  border-radius: 20px;
  border: 1px solid #EEE;
  display: flex;
  flex: auto;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-height: 200px;
  padding: 20px;
  width: 100%;
  transition: all 0.4s ease-in-out;

  > * {
    flex: 1;
  }

  > p, a {
    flex-basis: 25%;
  }
  
  > h3, section {
    flex-basis: 60%;
  }
`
