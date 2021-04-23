import { getCustomRepository } from 'typeorm'
import { ConnectionsRepository } from '../repositories'

interface Connection {
  socket_id: string
  user_id: string
  admin_id?: string
  id?: string
}

const ConnectionsService = {
  create: async ({ socket_id, user_id, admin_id, id }: Connection) => {
    const connectionRepository = getCustomRepository(ConnectionsRepository)
    
    const connection = connectionRepository.create({
      socket_id,
      user_id,
      admin_id,
      id,
    })

    return await connectionRepository.save(connection)
  },
  findByUserId: async ({ user_id = '' }) => {
    const connectionRepository = getCustomRepository(ConnectionsRepository)
    return await connectionRepository.findOne({ user_id })
  }
}

export default ConnectionsService