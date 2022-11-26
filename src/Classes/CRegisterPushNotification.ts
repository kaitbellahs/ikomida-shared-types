import { Property } from '../Decorators/Property.js'
import BaseJSON from './BaseJSON.js'

export default class CRegisterPushNotification extends BaseJSON {
  @Property
  platform!: string
  @Property
  token!: string

  static init(platform: string, token: string, id?: string, timestamp?: number): CRegisterPushNotification {
    return this.createInitObject(arguments, ['platform', 'token', 'id', 'timestamp'])
  }
}
