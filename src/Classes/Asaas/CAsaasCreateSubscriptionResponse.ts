import CAsaasSplit from './CAsaasSplit'
import CAsaasDiscount from './CAsaasDiscount'
import CAsaasFine from './CAsaasFine'
import CAsaasErrors from './CAsaasErrors'
import CAsaasCardResponse from './CAsaasCardResponse'
import { TAsaasBilling, TAsaasSubscriptionStatus } from '../../Types/Asaas'
import { Enum } from '../../Decorators/Enum'
import { FromJSON } from '../../Decorators/FromJSON'
import { Property } from '../../Decorators/Property'

export default class CAsaasCreateSubscriptionResponse extends CAsaasErrors {
  @Property
  object?: string
  @Property
  @FromJSON
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
