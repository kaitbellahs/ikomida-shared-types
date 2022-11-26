import { FromJSON } from '../Decorators/FromJSON.js'
import Nullable from '../Decorators/Nullable.js'
import { Property } from '../Decorators/Property.js'
import BaseJSON from './BaseJSON.js'
import CVendorLimit from './CVendorLimit.js'

export default class CPushNotificationMessage extends BaseJSON {
  @Property
  @Nullable
  title?: string
  @Property
  @Nullable
  body?: string
  @Property
  @Nullable
  sends?: number
  @Property
  @Nullable
  fails?: number
  @Property
  @Nullable
  opens?: number
  @Property
  @FromJSON
  @Nullable
  createdAt?: Date

  static init(
    title?: string,
    body?: string,
    sends?: number,
    fails?: number,
    opens?: number,
    createdAt?: Date,
    id?: string,
    timestamp?: CVendorLimit
  ): CPushNotificationMessage {
    return this.createInitObject(arguments, [
      'title',
      'body',
      'sends',
      'fails',
      'opens',
      'createdAt',
      'id',
      'timestamp'
    ])
  }
}
