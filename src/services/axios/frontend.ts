import axios, { AxiosError } from 'axios'

const frontendAxios = axios.create({
  baseURL: process.env.BASE_URL_API_ROUTES,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
  }
})

frontendAxios.interceptors.request.use(
  function (request) {
    // const token = localStorage.getItem('token')

    // Abstrair as validações de token do back numa função e chamar aqui e lá
    // if (!token) return Promise.reject(Error('Token inexistente ou inválido!'))

    // const bearerTokenHeader = {
    //   headers: {
    //     authorization: `Bearer ${token}`
    //   }
    // }

    if (request.method === 'GET') console.log('[Fetching data...]')
    if (request.method === 'POST') console.log('[Sending data...]')

    const xsrfProtectConfig = {
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN'
    }

    const handledRequest = {
      ...request,
      // ...bearerTokenHeader,
      ...xsrfProtectConfig
    }

    return handledRequest
  },
  function (error) {
    return Promise.reject(error)
  }
)

frontendAxios.interceptors.response.use(
  function (response) {
    // configurações de notificações baseadas no status code aqui
    return response
  },
  function (error: AxiosError) {
    if (error?.response?.status === 401 || error?.response?.data.message === '401 Unauthorized') {
      // fazer alguma checagem pra ver se os dados de login do usuário expiraram ou não
      console.log({ error })
    }

    return Promise.reject(error)
  }
)

export default frontendAxios
