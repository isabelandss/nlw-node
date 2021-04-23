import { getCustomRepository } from 'typeorm'
import { Setting } from '../entities'
import { SettingsRepository } from '../repositories'

interface ISetting {
  chat: boolean
  username: string
}

const SettingsService = {
  create: async ({ chat, username }: ISetting) => {
    const settingsRepository = getCustomRepository(SettingsRepository)

    const alreadyExists = await settingsRepository.findOne({ username })

    if(alreadyExists) {
      throw new Error('user already exists')
    }
    
    const settings = settingsRepository.create({ chat, username })
    return await settingsRepository.save(settings)
  },
  findByUsername: async ({ username }) => {
    const settingsRepository = getCustomRepository(SettingsRepository)
    return await settingsRepository.findOne({ username })
  },
  update: ({ username, chat }) => {
    const settingsRepository = getCustomRepository(SettingsRepository)

    return settingsRepository
      .createQueryBuilder()
      .update(Setting)
      .set({ chat })
      .where('username = :username', { username })
      .execute()
  }
}

export default SettingsService