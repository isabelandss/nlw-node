import { Router } from 'express'
import { SettingsController } from './controllers'

export const routes = Router()

routes.post('/settings', SettingsController.create)
