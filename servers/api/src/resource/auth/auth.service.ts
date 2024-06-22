import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string): Promise<unknown> {
    const user = await this.userService.findByUsername(username)
    if (user && bcrypt.compareSync(password, user.password)) {
      return user
    }
    return null
  }

  async login(user: { username: string; id: string }) {
    const payload = { username: user.username, sub: user.id }
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
