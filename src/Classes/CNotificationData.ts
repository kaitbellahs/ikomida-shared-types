import { Nullable } from '../Decorators'
import { Property } from '../Decorators/Property'
import BaseJSON from './BaseJSON'

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
