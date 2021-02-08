import styled from 'styled-components'

export const StyledMain = styled.main`
  display: flex;
  justify-content: space-evenly;
  height: calc(100vh - 236px);
  overflow: auto;
  padding: 20px;
  width: 100%;
`

export const StyledFilterContainer = styled.section`
  border-radius: 20px;
  background-color: #EEE;
  height: fit-content;
  padding: 20px;
  width: 15%;
`

export const StyledBodyContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;
  flex: 1 1 auto;

  .MuiPagination-root {
    display: flex;
    justify-content: center;
    margin: 20px;
    width: 100%;
  }
`
