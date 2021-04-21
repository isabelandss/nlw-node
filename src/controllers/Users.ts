import { Request, Response } from "express"
import { UsersService } from "../services"

const UsersController = {
  create: async (req: Request, res: Response) => {
    const { email } = req.body

    const user = await UsersService.create({ email })
    return res.json(user)
  }
}

export default UsersController
