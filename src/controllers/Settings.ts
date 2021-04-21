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
  }
}

export default SettingsController
