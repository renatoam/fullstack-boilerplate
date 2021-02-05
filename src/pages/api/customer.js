const express = require('express')
const axios = require('../../services/axios')
const cors = require('cors')
const app = express()

app.use(cors({
  origin: [
    'http://localhost:3000'
  ]
}))

const coordinatesListByType = [
  {
    minlon: -15.41158,
    minlat: -46.361899,
    maxlon: -2.196998,
    maxlat: -34.276938,
    type: 'especial'
  },
  {
    minlon: -20.0,
    minlat: -52.997614,
    maxlon: -19.766959,
    maxlat: -44.428305,
    type: 'especial'
  },
  {
    minlon: -34.016466,
    minlat: -54.777426,
    maxlon: -26.155681,
    maxlat: -46.603598,
    type: 'normal'
  },
  {
    type: 'trabalhoso'
  }
]

const handleCoordinates = {
  longitude: (longitude, coordinates) => {
    return longitude >= coordinates.minlon && longitude <= coordinates.maxlon
  },
  latitude: (latitude, coordinates) => {
    return latitude >= coordinates.minlat && latitude <= coordinates.maxlat
  }
}

function filterCoordinates(filter, list) {
  return list.filter(item => item.type === filter)
}

function checkCoordinatesInList(list, coordinateName, coordinate) {
  return list.some(item => handleCoordinates[coordinateName](coordinate, item))
}

function filterCustomersList(items, filter) {
  return items.filter((item, idx) => {
    const longitude = item.location.coordinates.longitude
    const latitude = item.location.coordinates.latitude
    const coordinatesList = filterCoordinates(filter, coordinatesListByType)
    const checkLongitude = checkCoordinatesInList(coordinatesList, 'longitude', longitude)
    const checkLatitude = checkCoordinatesInList(coordinatesList, 'latitude', latitude)

    if (!filter) return item

    if (filter === 'trabalhoso') {
      return checkCoordinatesInList(coordinatesListByType, 'longitude', longitude) ||
      checkCoordinatesInList(coordinatesListByType, 'latitude', latitude)
        ? false
        : item
    }

    console.log({ bool: (checkLongitude && checkLatitude) })
    return (checkLongitude && checkLatitude) ? item : false
  })
}

export default async function customers(req, res) {
  const filter = req.query.filter

  if (req.method === 'POST') {
    return res.send(
      "For now, you can't perform POST requests. Try to do a GET request."
    )
  }

  try {
    const response = await axios
      .get('/frontend-challenge.json')
      .then(response => response.data.results)

    const filteredCustomers = filterCustomersList(response, filter)
    console.log('filteredCustomers', filteredCustomers.length)

    return res.status(200).json('filteredCustomers')
  } catch (error) {
    console.log(error)
  }
}
