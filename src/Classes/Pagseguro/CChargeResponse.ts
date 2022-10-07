import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'
import { TPagSeguroPaymentStatus } from '../../Types/index.js'
import { Enum } from '../../Decorators/Enum.js'

export default class CChargeResponse extends BaseJSON {
  @Property
  cardId?: string
  @Property
  brand?: string
  @Property
  firstDigits?: string
  @Property
  lastDigits?: string
  @Property
  ikomidaID?: string
  @Property
  reference?: string
  @Property
  @Enum
  status?: TPagSeguroPaymentStatus
  @Property
  amount?: number

  static init(
    cardId?: string,
    brand?: string,
    firstDigits?: string,
    lastDigits?: string,
    ikomidaID?: string,
    reference?: string,
    status?: TPagSeguroPaymentStatus,
    amount?: number,
    id?: string
  ): CChargeResponse {
    return this.createInitObject(arguments)
  }
}
