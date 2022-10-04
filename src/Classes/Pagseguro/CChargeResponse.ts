import BaseJSON from '../BaseJSON'
import { Property } from '../../Decorators/Property'
import { TPagSeguroPaymentStatus } from '../../Types'
import { Enum } from '../../Decorators/Enum'

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
