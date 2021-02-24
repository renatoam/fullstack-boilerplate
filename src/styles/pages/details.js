import styled from 'styled-components'

export const StyledSection = styled.section`
  &.wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: flex-start;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  &.image {
    width: 45%;
  }

  &.info {
    width: 45%;
  }
  
  &.info,
  &.image {
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  &.description {
    width: 100%;
  }
`
