import { Injectable, OnModuleInit } from '@nestjs/common'
import { CustomLoggerService } from './logger.service'
import { UserRepository } from '@/resource/users/user.repository'
import { UsersService } from '@/resource/users/users.service'

@Injectable()
export class InitializationService implements OnModuleInit {
  constructor(
    private readonly logger: CustomLoggerService,
    private readonly userRepository: UserRepository
  ) {}

  async onModuleInit() {
    await this.initializeDefaultUser()
  }

  private async initializeDefaultUser() {
    const existingUser = await this.userRepository.findByUsername('admin')

    if (!existingUser) {
      // 如果数据库中不存在默认用户，则创建默认用户
      await this.userRepository.createUser('admin', 'admin')
      this.logger.log('Default user created successfully.')
    } else {
      this.logger.warn('Default user already exists.')
    }
  }
}
