import styled from 'styled-components'

export const StyledCard = styled.section`
  border-radius: 20px;
  border: 1px solid #EEE;
  display: flex;
  flex-direction: column;
  flex: auto;
  align-items: center;
  justify-content: space-between;
  height: 350px;
  padding: 20px;
  width: 200px;
  transition: all 0.4s ease-in-out;

  @media (min-width: 460px) {
    max-width: 230px;
    min-width: 220px;
  }

  &:hover {
    box-shadow: 2px 2px 5px 0 #EEE;
  }
`
