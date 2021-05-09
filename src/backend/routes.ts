import { Router } from 'express'
import authController from './controllers/authController'
import authMiddleware from './middlewares/auth'

const routes = Router()

routes.use('/auth', authMiddleware)
routes.get('/auth', authController.list)

export default routes
