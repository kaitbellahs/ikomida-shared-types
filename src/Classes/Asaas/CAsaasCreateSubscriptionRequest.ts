import CAsaasCard from './CAsaasCard.js'
import CAsaasSplit from './CAsaasSplit.js'
import CAsaasDiscount from './CAsaasDiscount.js'
import CAsaasFine from './CAsaasFine.js'
import CAsaasCreditCardHolderInfo from './CAsaasCreditCardHolderInfo.js'
import { TAsaasBilling, TAssasSubscriptionCycle } from '../../Types/Asaas/index.js'
import { Enum } from '../../Decorators/Enum.js'
import BaseJSON from '../BaseJSON.js'
import { FromJSON } from '../../Decorators/FromJSON.js'
import { Property } from '../../Decorators/Property.js'
import { Nullable } from '../../Decorators/index.js'
export default class CAsaasCreateSubscriptionRequest extends BaseJSON {
  @Property
  customer!: string
  @Property
  @Enum
  billingType!: TAsaasBilling
  @Property
  dueDate!: string
  @Property
  value!: number
  @Property
  @Enum
  cycle!: TAssasSubscriptionCycle
  @Property
  @FromJSON
  creditCardHolderInfo?: CAsaasCreditCardHolderInfo
  @Property
  remoteIp!: string
  @Property
  creditCardToken?: string
  @Property
  @FromJSON
  @Nullable
  split?: CAsaasSplit
  @Property
  @FromJSON
  @Nullable
  discount?: CAsaasDiscount
  @Property
  @FromJSON
  @Nullable
  fine?: CAsaasFine
  @Property
  @FromJSON
  @Nullable
  interest?: CAsaasFine
  @Property
  @Nullable
  description?: string
  @Property
  @Nullable
  endDate?: string
  @Property
  @Nullable
  maxPayments?: number
  @Property
  @FromJSON
  @Nullable
  creditCard?: CAsaasCard
  @Property
  @Nullable
  externalReference?: string

  static init(
    customer: string,
    billingType: TAsaasBilling,
    dueDate: string,
    value: number,
    cycle: TAssasSubscriptionCycle,
    remoteIp: string,
    creditCardHolderInfo?: CAsaasCreditCardHolderInfo,
    creditCardToken?: string,
    split?: CAsaasSplit,
    discount?: CAsaasDiscount,
    fine?: CAsaasFine,
    interest?: CAsaasFine,
    description?: string,
    endDate?: string,
    maxPayments?: number,
    creditCard?: CAsaasCard,
    externalReference?: string
  ): CAsaasCreateSubscriptionRequest {
    return this.createInitObject(arguments, [
      'customer',
      'billingType',
      'dueDate',
      'value',
      'cycle',
      'remoteIp',
      'creditCardHolderInfo',
      'creditCardToken',
      'split',
      'discount',
      'fine',
      'interest',
      'description',
      'endDate',
      'maxPayments',
      'creditCard',
      'externalReference'
    ])
  }
}
