import { getCustomRepository } from "typeorm"
import { MessagesRepository } from "../repositories"

interface Message {
  admin_id?: string
  text: string
  user_id: string
}

const MessagesService = {
  create: async  ({ admin_id, text, user_id }: Message) => {
    const messageRepository = getCustomRepository(MessagesRepository)

    const message = messageRepository.create({ admin_id, text, user_id })
    const response = await messageRepository.save(message)

    return response
  },
  listByUser: async ({ user_id = '' }) => {
    const messageRepository = getCustomRepository(MessagesRepository)

    const messages = messageRepository.find({
      where: { user_id },
      relations: ['user'], //para trazer mais infos sobre o usuário
    })

    return messages
  }
}

export default MessagesService
