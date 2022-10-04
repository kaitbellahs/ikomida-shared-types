import { Property } from '../Decorators/Property'
import { FromJSON } from '../Decorators/FromJSON'
import BaseJSON from './BaseJSON'
import CNotification from './CNotification'
import CNotificationData from './CNotificationData'
import { Nullable } from '../Decorators'

export default class CNotificationPayload extends BaseJSON {
  @Property
  @FromJSON
  @Nullable
  notification?: CNotification
  @Property
  @FromJSON
  @Nullable
  data?: CNotificationData
  @Property
  @Nullable
  priority?: number
  @Property
  @Nullable
  topic?: string
  @Property
  @Nullable
  token?: string
  @Property
  @Nullable
  ikomidaId?: string
  @Property
  @Nullable
  condition?: string
  @Property
  @Nullable
  title?: string
  @Property
  @Nullable
  body?: string
}
