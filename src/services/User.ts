import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories"

const UsersService = {
  create: async ({ email }) => {
    const usersRepository = getCustomRepository(UsersRepository)

    const userAlreadyExists = await usersRepository.findOne({ email })

    if(userAlreadyExists) {
      return userAlreadyExists
    }

    const user = usersRepository.create({ email })
    await usersRepository.save(user)

    return user
  },
  findByEmail: async ({ email }) => {
    const usersRepository = getCustomRepository(UsersRepository)

    return await usersRepository.findOne({ email })
  }
}

export default UsersService
