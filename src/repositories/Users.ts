import { EntityRepository, Repository } from 'typeorm'
import { User } from '../entities'

@EntityRepository(User)
export default class UsersRepository extends Repository<User> {}
