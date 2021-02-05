import { useEffect } from 'react'
import styled from 'styled-components'
import { customerUseCases } from '../services/customers'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  useEffect(() => {
    async function teste() {
      const response = await customerUseCases
        .getCustomers()
        .then(resp => resp.data)
      console.log({ response })
    }

    teste()
  }, [])
  return (
    <>
      teste
      {/* {response &&
        response.map((item, idx) => {
          return <Title key={idx}>{item.name?.first}</Title>
        })} */}
    </>
  )
}
