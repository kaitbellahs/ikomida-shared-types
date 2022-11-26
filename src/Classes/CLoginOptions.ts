import { Property } from '../Decorators/Property.js'
import BaseJSON from './BaseJSON.js'

export default class CLoginOptions extends BaseJSON {
  @Property
  ip!: string
  @Property
  forwardedIp!: string
  @Property
  platform!: string
  @Property
  deviceId!: string
  @Property
  region!: string
  @Property
  subRegion!: string
  @Property
  citylatlong!: string
  @Property
  city!: string
  @Property
  app!: string

  static init(
    ip: string,
    forwardedIp: string,
    platform: string,
    deviceId: string,
    region: string,
    subRegion: string,
    citylatlong: string,
    city: string,
    app: string,
    id?: string,
    timestamp?: number
  ): CLoginOptions {
    return this.createInitObject(arguments, [
      'ip',
      'forwardedIp',
      'platform',
      'deviceId',
      'region',
      'subRegion',
      'citylatlong',
      'city',
      'app',
      'id',
      'timestamp'
    ])
  }
}
