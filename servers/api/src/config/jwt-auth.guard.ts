import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  async canActivate(context: ExecutionContext) {
    const authEnabled = this.configService.get('ENABLE_AUTH') === 'true'

    if (authEnabled) {
      const guard = new (AuthGuard('jwt'))()
      return guard.canActivate(context) as Promise<boolean>
    }
    return true
  }
}
