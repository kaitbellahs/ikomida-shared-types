import { Property } from '../Decorators/Property.js'
import { FromJSON } from '../Decorators/FromJSON.js'
import BaseJSON from './BaseJSON.js'
import CNotification from './CNotification.js'
import CNotificationData from './CNotificationData.js'
import { Nullable } from '../Decorators/index.js'

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
