import { Router } from 'express'
import { MessagesController, SettingsController, UsersController } from './controllers'

export const routes = Router()

routes.get('/settings/:username', SettingsController.findByUsername)
routes.patch('/settings/:username', SettingsController.update)
routes.post('/settings', SettingsController.create)

routes.post('/users', UsersController.create)

routes.post('/messages', MessagesController.create)
routes.get('/messages/:user_id', MessagesController.listByUser)