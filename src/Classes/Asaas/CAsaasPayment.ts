import CAsaasCardResponse from './CAsaasCardResponse.js'
import CAsaasRefund from './CAsaasRefund.js'
import CAsaasFine from './CAsaasFine.js'
import CAsaasDiscount from './CAsaasDiscount.js'
import { TAsaasBilling } from '../../Types/Asaas/index.js'
import { Enum } from '../../Decorators/Enum.js'
import BaseJSON from '../BaseJSON.js'
import { FromJSON } from '../../Decorators/FromJSON.js'
import { Property } from '../../Decorators/Property.js'
import { TAsaasPaymentStatus } from '../../Types/index.js'

export default class CAsaasPayment extends BaseJSON {
  @Property
  object?: string
  @Property
  dateCreated?: string
  @Property
  customer?: string
  @Property
  value?: number
  @Property
  netValue?: number
  @Property
  @Enum
  billingType?: TAsaasBilling
  @Property
  @Enum
  status?: TAsaasPaymentStatus
  @Property
  dueDate?: string
  @Property
  originalDueDate?: string
  @Property
  invoiceURL?: string
  @Property
  invoiceNumber?: string
  @Property
  deleted?: boolean
  @Property
  postalService?: boolean
  @Property
  anticipated?: boolean
  @Property
  originalValue?: number
  @Property
  interestValue?: number
  @Property
  description?: string
  @Property
  paymentLink?: string
  @Property
  canBePaidAfterDueDate?: string
  @Property
  pixTransaction?: string
  @Property
  paymentDate?: string
  @Property
  clientPaymentDate?: string
  @Property
  installmentNumber?: number
  @Property
  transactionReceiptURL?: string
  @Property
  nossoNumero?: string
  @Property
  externalReference?: any
  @Property
  bankSlipURL?: string
  @Property
  @FromJSON(CAsaasRefund)
  refunds?: CAsaasRefund[]
  @Property
  confirmedDate?: string
  @Property
  creditDate?: string
  @Property
  estimatedCreditDate?: string
  @Property
  lastInvoiceViewedDate?: string
  @Property
  lastBankSlipViewedDate?: string
  @Property
  @FromJSON
  discount?: CAsaasDiscount
  @FromJSON
  fine?: CAsaasFine
  @FromJSON
  interest?: CAsaasFine
  @FromJSON
  creditCard?: CAsaasCardResponse
}
