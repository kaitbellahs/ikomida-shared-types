import CAsaasSplit from './CAsaasSplit.js'
import CAsaasDiscount from './CAsaasDiscount.js'
import CAsaasFine from './CAsaasFine.js'
import CAsaasErrors from './CAsaasErrors.js'
import CAsaasCardResponse from './CAsaasCardResponse.js'
import { TAsaasBilling, TAsaasSubscriptionStatus } from '../../Types/Asaas/index.js'
import { Enum } from '../../Decorators/Enum.js'
import { FromJSON } from '../../Decorators/FromJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CAsaasCreateSubscriptionResponse extends CAsaasErrors {
  @Property
  object?: string
  @Property
  dateCreated?: string
  @Property
  customer?: string
  @Property
  @Enum
  billingType?: TAsaasBilling
  @Property
  cycle?: string
  @Property
  value?: number
  @Property
  nextDueDate?: string
  @Property
  @Enum
  status?: TAsaasSubscriptionStatus
  @Property
  deleted?: boolean
  @Property
  @FromJSON
  creditCard?: CAsaasCardResponse
  @Property
  paymentLink?: string
  @Property
  @FromJSON
  discount?: CAsaasDiscount
  @Property
  @FromJSON
  fine?: CAsaasFine
  @FromJSON
  interest?: CAsaasFine
  @Property
  description?: string
  @Property
  endDate?: string
  @Property
  maxPayments?: number
  @Property
  @FromJSON
  split?: CAsaasSplit
}
