import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CSubscriptionFine extends BaseJSON {
  @Property
  value?: number
}
