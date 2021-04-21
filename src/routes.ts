import { Router } from 'express'
import { MessagesController, SettingsController, UsersController } from './controllers'

export const routes = Router()

routes.post('/settings', SettingsController.create)
routes.post('/users', UsersController.create)
routes.post('/messages', MessagesController.create)