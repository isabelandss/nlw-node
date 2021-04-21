import { Router } from 'express'
import { SettingsController, UsersController } from './controllers'

export const routes = Router()

routes.post('/settings', SettingsController.create)
routes.post('/users', UsersController.create)