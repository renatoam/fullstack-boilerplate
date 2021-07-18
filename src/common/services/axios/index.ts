import axios, { AxiosError } from 'axios'
import * as express from 'express'
import * as next from 'next'
import { parseCookies } from 'nookies'

export type ContextNookiesFunctions =
  | Pick<next.NextPageContext, 'req'>
  | {
      req: next.NextApiRequest
    }
  | {
      req: express.Request
    }
  | null
  | undefined

axios.create({
  baseURL: 'https://localhost:3000',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
  }
})

axios.interceptors.request.use(
  function (request) {
    const { authToken: token } = parseCookies()

    const bearerTokenHeader = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    if (request.method === 'GET') console.log('[Fetching data...]')
    if (request.method === 'POST') console.log('[Sending data...]')

    const xsrfProtectConfig = {
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN'
    }

    const handledRequest = {
      ...request,
      ...bearerTokenHeader,
      ...xsrfProtectConfig
    }

    return handledRequest
  },
  function (error) {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
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

export default axios
