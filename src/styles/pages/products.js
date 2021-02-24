import styled from 'styled-components'

export const StyledMain = styled.main`
  display: flex;
  justify-content: space-evenly;
  overflow: auto;
  gap: 20px;
  padding: 20px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const StyledBodyContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 auto;

  .MuiPagination-root {
    display: flex;
    justify-content: center;
    margin: 20px;
    width: 100%;
  }
`
