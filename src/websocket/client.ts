import { io } from '../http'
import { ConnectionsService, UsersService, MessagesService } from '../services'

interface Params {
  text: string
  email: string
}

io.on('connect', socket => {
  socket.on('client_first_access', async params => {
    const socket_id = socket.id
    const { text, email } = params as Params 
    let user_id = null

    const userExists = await UsersService.findByEmail({ email })

    if(!userExists) {
      const user = await UsersService.create({ email })
      user_id = user.id
      return await ConnectionsService.create({ socket_id, user_id: user.id })
    }

    user_id = userExists.id

    const connection = await ConnectionsService.findByUserId({ user_id: userExists.id })

    if(!connection) {
      await ConnectionsService.create({ socket_id, user_id: userExists.id })
    } else {
      connection.socket_id = socket_id
      await ConnectionsService.create(connection)
    }

    await MessagesService.create({ text, user_id })
  })
})