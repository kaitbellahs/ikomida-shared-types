import { Property } from '../Decorators/Property'
import BaseJSON from './BaseJSON'

export default class CRegisterPushNotification extends BaseJSON {
  @Property
  platform!: string
  @Property
  token!: string

  static init(platform: string, token: string, id?: string, timestamp?: number): CRegisterPushNotification {
    return this.createInitObject(arguments)
  }
}
