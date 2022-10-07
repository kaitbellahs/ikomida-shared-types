import { Property } from '../Decorators/Property.js'
import { Enum } from '../Decorators/Enum.js'
import { FromJSON } from '../Decorators/FromJSON.js'
import { TAsaasPaymentStatus } from '../Types/index.js'
import BaseJSON from './BaseJSON.js'
import { Nullable } from '../Decorators/index.js'

export default class CSubscriptionCharge extends BaseJSON {
  @Property
  value!: number
  @Property
  creditCardNumber!: number
  @Property
  creditCardBrand!: string
  @Property
  @FromJSON
  dueDate!: Date
  @Property
  @Enum
  status!: TAsaasPaymentStatus
  @Property
  @Nullable
  invoiceUrl?: string
  @Property
  @Nullable
  transactionReceiptUrl?: string
  @Property
  @FromJSON
  @Nullable
  confirmedDate?: Date

  static init(
    value: number,
    creditCardNumber: number,
    creditCardBrand: string,
    dueDate: Date,
    status: TAsaasPaymentStatus,
    invoiceUrl?: string,
    transactionReceiptUrl?: string,
    confirmedDate?: Date,
    id?: string,
    timestamp?: number
  ): CSubscriptionCharge {
    return this.createInitObject(arguments)
  }
}
