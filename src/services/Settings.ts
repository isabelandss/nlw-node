import { getCustomRepository } from 'typeorm'
import { SettingsRepository } from '../repositories'

interface Setting {
  chat: boolean
  username: string
}

const SettingsService = {
  create: async ({ chat, username }: Setting) => {
    const settingsRepository = getCustomRepository(SettingsRepository)

    const alreadyExists = await settingsRepository.findOne({ username })

    if(alreadyExists) {
      throw new Error('user already exists')
    }
    
    const settings = settingsRepository.create({ chat, username })
    return await settingsRepository.save(settings)
  }
}

export default SettingsService