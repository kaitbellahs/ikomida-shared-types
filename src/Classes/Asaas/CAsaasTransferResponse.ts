import { Enum } from '../../Decorators/Enum.js'
import { FromJSON } from '../../Decorators/FromJSON.js'
import { TAsaasTransferOperation, TAsaasTransferStatus } from '../../Types/Asaas/index.js'
import CAsaasBankAccount from './CAsaasBankAccount.js'
import CAsaasErrors from './CAsaasErrors.js'
import { Property } from '../../Decorators/Property.js'

export default class CAsaasTransferResponse extends CAsaasErrors {
  @Property
  object?: string
  @Property
  type?: string
  @Property
  dateCreated?: string
  @Property
  @FromJSON
  bankAccount?: CAsaasBankAccount
  @Property
  value?: number
  @Property
  netValue?: number
  @Property
  @Enum
  status?: TAsaasTransferStatus
  @Property
  transferFee?: number
  @Property
  effectiveDate?: string
  @Property
  endToEndIdentifier?: string
  @Property
  scheduleDate?: string
  @Property
  authorized?: boolean
  @Property
  failReason?: string
  @Enum
  operationType?: TAsaasTransferOperation
  @Property
  description?: string
  @Property
  transactionReceiptUrl?: string
}
