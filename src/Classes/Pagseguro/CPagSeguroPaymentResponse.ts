import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CPagSeguroPaymentResponse extends BaseJSON {
  @Property
  code?: string
  @Property
  message?: string
  @Property
  reference?: string
}
