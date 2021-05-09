import axios from 'axios'

const backendAxios = axios.create({
  baseURL: process.env.BASE_URL_SERVER,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
  }
})

// Provavelmente não vou interceptar pra verificar o token aqui,
// mas sim num middleware express. Verificar.

export default backendAxios
