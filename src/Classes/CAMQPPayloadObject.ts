import { Nullable } from '../Decorators/index.js'
import { Property } from '../Decorators/Property.js'
import BaseJSON from './BaseJSON.js'

export default class CAMQPPayloadObject extends BaseJSON {
  @Property
  message!: any
  @Property
  @Nullable
  userId?: string
  @Property
  @Nullable
  contractId?: string
  @Property
  @Nullable
  areaCode?: string
  @Property
  @Nullable
  phone?: string
  @Property
  @Nullable
  platform?: string
}
