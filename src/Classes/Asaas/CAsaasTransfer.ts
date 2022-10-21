import { Enum } from '../../Decorators/Enum.js'
import { TPIX } from '../../Types/index.js'
import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CAsaasTransfer extends BaseJSON {
  @Property
  @Enum
  pixAddressKeyType?: TPIX
  @Property
  amount?: number
  @Property
  description?: string
  @Property
  pixAddressKey?: string
}
