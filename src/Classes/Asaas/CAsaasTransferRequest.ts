import { Enum } from '../../Decorators/Enum.js'
import { TPIX } from '../../Types/index.js'
import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CAsaasTransferRequest extends BaseJSON {
  @Property
  @Enum
  pixAddressKeyType?: TPIX
  @Property
  value?: number
  @Property
  description?: string
  @Property
  pixAddressKey?: string
  @Property
  scheduleDate?: string
}
