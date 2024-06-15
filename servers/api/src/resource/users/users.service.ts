import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find()
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } })
  }

  create(user: Partial<User>): Promise<User> {
    const newUser = this.userRepository.create(user)
    return this.userRepository.save(newUser)
  }

  async update(id: number, updateUserDto: Partial<User>): Promise<User> {
    await this.userRepository.update(id, updateUserDto)
    return this.findOne(id)
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id)
  }
}
