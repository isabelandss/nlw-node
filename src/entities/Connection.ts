import { Entity, Column, PrimaryColumn, CreateDateColumn, Timestamp, UpdateDateColumn, JoinColumn, OneToOne, ManyToOne } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { User } from '.'

@Entity('connections')
class Connection {
  @PrimaryColumn()
  id: string

  @Column()
  admin_id: string

  @JoinColumn({ name: 'user_id' })
  // @OneToOne(() => User)
  @ManyToOne(() => User)
  user: User
  
  @Column()
  user_id: string

  @Column()
  socket_id: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor() {
    if(!this.id) this.id = uuid()
  }
}

export default Connection
