import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>
  ) {}

  async findByUsername(username: string): Promise<User | undefined> {
    return this.repository.findOne({ where: { username } })
  }

  async createUser(username: string, password: string): Promise<User> {
    const user = this.repository.create({ username, password })
    return this.repository.save(user)
  }
}
