import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { DataSource } from 'typeorm'
import { UsersService } from '../users.service'
import { UsersModule } from '../users.module'
import { User } from '../entities/user.entity'

describe('UsersService', () => {
  // let service: UsersService
  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     imports: [UsersModule],
  //     providers: [
  //       UsersService,
  //       {
  //         provide: getRepositoryToken(User),
  //         useClass: User
  //       },
  //       {
  //         provide: DataSource,
  //         useValue: {} // 模拟 DataSource
  //       }
  //     ]
  //   }).compile()
  //   service = module.get<UsersService>(UsersService)
  // })
  it('should be defined', () => {
    // expect(service).toBeDefined()
  })
})
