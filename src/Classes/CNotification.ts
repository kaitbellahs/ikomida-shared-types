import { Nullable } from '../Decorators'
import { Property } from '../Decorators/Property'
import BaseJSON from './BaseJSON'

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
    return this.createInitObject(arguments)
  }
}
