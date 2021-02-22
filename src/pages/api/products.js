import axiosInstance from '../../services/axios'
const axios = axiosInstance('backend')

export default async function products(req, res) {
  const response = await axios
    .get('/')
    .then(resp => resp.data.products)

  return res.status(200).send(response)
}
