import BaseJSON from '../BaseJSON'
import { Property } from '../../Decorators/Property'

export default class CSubscriptionDiscount extends BaseJSON {
  @Property
  value?: number
  @Property
  dueDateLimitDays?: number
}
