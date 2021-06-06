import { Request, Response } from 'express'

const Auth = {
  title: 'Fake Model',
  getFromDatabase: () => {}
}

const authController = {
  list(request: Request, response: Response) {
    const list = Auth.getFromDatabase()

    return response.status(200).send({ list })
  }
}

export default authController
