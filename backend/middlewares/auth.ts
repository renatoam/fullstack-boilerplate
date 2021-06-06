import { NextFunction, Request, Response } from 'express'

export default function (request: Request, response: Response, next: NextFunction) {
  const requestHeaders = request.headers.authorization

  if (!requestHeaders) return response.status(401).send({ error: 'Nenhum token provido.' })

  const splittedToken = requestHeaders.split(' ')

  if (splittedToken?.length !== 2) {
    return response.status(401).send({ error: 'Formato de token inválido.' })
  }

  const [scheme, token] = splittedToken

  if (!/^Bearer$/i.test(scheme)) {
    return response.status(401).send({ error: 'Tipo de token inválido.' })
  }

  if (!token) return response.status(401).send({ error: 'Token inválido.' })

  return next()
}
