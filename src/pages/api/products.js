import axiosInstance from '../../services/axios'
const axios = axiosInstance('backend')

export default async function products(req, res) {
  const filter = req.query.filter
  const response = await axios
    .get('/')
    .then(resp => resp.data.products)

  if (filter) {
    const filteredData = response.filter(products => {
      return products.brand === filter
    })

    return res.status(200).send(filteredData)
  }

  return res.status(200).send(response)
}
