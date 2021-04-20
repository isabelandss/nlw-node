import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { SettingsRepository } from '../repositories'

const SettingsController = {
  create: async (req: Request, res: Response) => {
    const settingsRepository = getCustomRepository(SettingsRepository)

    const { chat, username } = req.body
    
    const settings = settingsRepository.create({ chat, username })
    const response = await settingsRepository.save(settings)

    return res.json(response)
  }
}

export default SettingsController
