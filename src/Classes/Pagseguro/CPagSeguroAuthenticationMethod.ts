import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CPagSeguroAuthenticationMethod extends BaseJSON {
  @Property
  type?: string
  @Property
  cavv?: string
  @Property
  eci?: string
  @Property
  xid?: string
  @Property
  version?: string
  @Property
  dstrans_id?: string
}
