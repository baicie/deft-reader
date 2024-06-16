import { Injectable } from '@nestjs/common'
import { I18nContext, I18nService } from 'nestjs-i18n'

@Injectable()
export class AppService {
  constructor(private readonly i18n: I18nService) {}
  getHello(): string {
    return this.i18n.t('test.hello', {
      lang: I18nContext.current().lang
    })
  }

  getProfile(): string {
    return this.i18n.t('test.profile', {
      lang: I18nContext.current().lang
    })
  }
}
