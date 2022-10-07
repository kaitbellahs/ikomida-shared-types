import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CPagSeguroRecurring extends BaseJSON {
  @Property
  type?: string
}
