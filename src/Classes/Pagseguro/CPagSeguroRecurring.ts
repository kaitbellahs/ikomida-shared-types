import BaseJSON from '../BaseJSON'
import { Property } from '../../Decorators/Property'

export default class CPagSeguroRecurring extends BaseJSON {
  @Property
  type?: string
}
