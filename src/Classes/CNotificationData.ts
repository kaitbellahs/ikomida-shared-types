import { Nullable } from '../Decorators/index.js'
import { Property } from '../Decorators/Property.js'
import BaseJSON from './BaseJSON.js'

export default class CNotificationData extends BaseJSON {
  @Property
  @Nullable
  method?: string
  @Property
  @Nullable
  message?: string
  @Property
  @Nullable
  uri?: string
  @Property
  @Nullable
  logon?: string
  @Property
  @Nullable
  payload?: string
}
