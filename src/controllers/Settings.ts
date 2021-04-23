import { Request, Response } from 'express'
import { SettingsService } from '../services'

const SettingsController = {
  create: async (req: Request, res: Response) => {
    const { chat, username } = req.body

    try {
      const response = await SettingsService.create({ chat, username })
      return res.json(response)

    } catch (error) {
      return res.status(400).json({ message: error.message })
    }
  },
  findByUsername: async (req: Request, res: Response) => {
    const { username } = req.params
    const settings = await SettingsService.findByUsername({ username })
    return res.json(settings)
  },
  update: async (req: Request, res: Response) => {
    const { username } = req.params
    const { chat } = req.body

    const settings = await SettingsService.update({ username, chat })
    return res.json(settings)
  }
}

export default SettingsController
