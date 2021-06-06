import { ProductData } from '@helpers/interfaces'
import { backendAxios } from '@services/axios'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function products(request: NextApiRequest, response: NextApiResponse) {
  const axios = backendAxios()
  // abstrair essa requisição e usar aqui e no getStaticProps com Redux
  const filter = request.query.filter
  const products = await axios.get('/products').then(resp => resp.data)

  if (filter) {
    const filteredData = products.filter((products: ProductData) => {
      return products.brand === filter
    })

    return response.status(200).send(filteredData)
  }

  return response.status(200).send(products)
}
