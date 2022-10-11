import { Nullable } from '../Decorators/index.js'
import { Property } from '../Decorators/Property.js'
import BaseJSON from './BaseJSON.js'

export default class CNotification extends BaseJSON {
  @Property
  title!: string
  @Property
  body!: string
  @Property
  @Nullable
  method?: string
  @Property
  @Nullable
  uri?: string
  @Property
  @Nullable
  logon?: string

  static init(
    title: string,
    body: string,
    method?: string,
    uri?: string,
    logon?: string,
    id?: string,
    timestamp?: number
  ): CNotification {
    return this.createInitObject(arguments, ['title', 'body', 'method', 'uri', 'logon', 'id', 'timestamp'])
  }
}
