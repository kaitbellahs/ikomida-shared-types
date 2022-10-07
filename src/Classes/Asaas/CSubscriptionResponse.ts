import CSubscriptionInterest from './CSubscriptionInterest.js'
import CSubscriptionFine from './CSubscriptionFine.js'
import CSubscriptionDiscount from './CSubscriptionDiscount.js'
import { TAsaasBilling } from '../../Types/Asaas/index.js'
import { Enum } from '../../Decorators/Enum.js'
import CAsaasErrors from './CAsaasErrors.js'
import { Property } from '../../Decorators/Property.js'
import { FromJSON } from '../../Decorators/FromJSON.js'
import { TAsaasSignatureStatus } from '../../Types/index.js'

export default class CSubscriptionResponse extends CAsaasErrors {
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
  description?: string
  @Property
  @Enum
  status?: TAsaasSignatureStatus
  @Property
  @FromJSON
  discount?: CSubscriptionDiscount
  @Property
  @FromJSON
  fine?: CSubscriptionFine
  @Property
  @FromJSON
  interest?: CSubscriptionInterest
  @Property
  deleted?: boolean
  @Property
  paymentLink?: string
}
