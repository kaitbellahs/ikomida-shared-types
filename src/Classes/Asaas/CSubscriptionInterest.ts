import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CSubscriptionInterest extends BaseJSON {
  @Property
  value?: number
}
