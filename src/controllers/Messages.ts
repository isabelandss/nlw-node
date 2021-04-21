import { Request, Response } from "express"
import { MessagesService } from "../services"

const MessagesController = {
  create: async (req: Request, res: Response) => {
    const { admin_id, text, user_id } = req.body

    try {
      const message = await MessagesService.create({ admin_id, text, user_id })
      return res.json(message)

    } catch (error) {
      return res.status(400).json(error)
    }    
  }
}

export default MessagesController
