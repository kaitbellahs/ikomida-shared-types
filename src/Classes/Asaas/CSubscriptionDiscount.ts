import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CSubscriptionDiscount extends BaseJSON {
  @Property
  value?: number
  @Property
  dueDateLimitDays?: number
}
