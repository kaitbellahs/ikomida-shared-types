import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CPagSeguroTokenData extends BaseJSON {
  @Property
  requestor_id?: string
  @Property
  wallet?: string
  @Property
  cryptogram?: string
  @Property
  ecommerce_domain?: string
  @Property
  assurance_level?: number
}
