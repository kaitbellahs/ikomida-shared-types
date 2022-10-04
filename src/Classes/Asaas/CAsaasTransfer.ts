import { Enum } from '../../Decorators/Enum'
import { TPIX } from '../../Types'
import BaseJSON from '../BaseJSON'
import { Property } from '../../Decorators/Property'

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
