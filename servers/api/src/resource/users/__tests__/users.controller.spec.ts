import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { DataSource } from 'typeorm'
import { User } from '../entities/user.entity'
import { UsersController } from '../users.controller'
import { UsersService } from '../users.service'

describe('UsersController', () => {
  // let controller: UsersController
  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     controllers: [UsersController],
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
  //   controller = module.get<UsersController>(UsersController)
  // })
  it('should be defined', () => {
    // expect(controller).toBeDefined()
  })
})
