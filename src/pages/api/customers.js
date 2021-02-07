const axiosInstance = require('../../services/axios')
const axios = axiosInstance.default
const { coordinatesListByType } = require('../../constants/coordinates')

function checkItemInCoordinatesList(item, coordinates) {
  const longitude = coordinates.some(coordinate => item.longitude >= coordinate.minlon && item.longitude <= coordinate.maxlon)
  const latitude = coordinates.some(coordinate => item.latitude >= coordinate.minlat && item.latitude <= coordinate.maxlat)

  return longitude && latitude
}

function filterCustomersList(items, filter) {
  return items.filter((item, idx) => {
    if (filter === 'normal' || filter === 'especial') {
      return checkItemInCoordinatesList(item.location.coordinates, coordinatesListByType[filter])
    }

    if (filter === 'trabalhoso') {
      const normals = !checkItemInCoordinatesList(item.location.coordinates, coordinatesListByType["normal"])
      const specials = !checkItemInCoordinatesList(item.location.coordinates, coordinatesListByType["especial"])

      return normals && specials
    }

    return item
  })
}

export default async function customers(req, res) {
  const filter = req.query.filter

  if (req.method === 'POST') {
    return res.send(
      "For now, you can't perform POST requests. Try to do a GET request."
    )
  }

  const response = await axios
    .get('/frontend-challenge.json')
    .then(resp => resp.data.results)

  const filteredCustomers = filterCustomersList(response, filter)

  return res.status(200).send(filteredCustomers)
}
