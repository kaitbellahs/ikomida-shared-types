import { FromJSON } from '../../Decorators/FromJSON.js'
import BaseJSON from '../BaseJSON.js'
import CPagSeguroAddress from './CPagSeguroAddress.js'
import { Property } from '../../Decorators/Property.js'

export default class CPagSeguroBoletoHolder extends BaseJSON {
  @Property
  @FromJSON
  address?: CPagSeguroAddress
  @Property
  name?: string
  @Property
  tax_id?: string
  @Property
  email?: string
}
