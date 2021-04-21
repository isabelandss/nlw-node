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
  }
}

export default MessagesService
