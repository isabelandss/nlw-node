import { EntityRepository, Repository } from "typeorm";
import { Connection } from "../entities";

@EntityRepository(Connection)
export default class ConnectionsRepository extends Repository<Connection> {}