import { Property } from '../Decorators/Property.js'
import { Enum } from '../Decorators/Enum.js'
import { FromJSON } from '../Decorators/FromJSON.js'
import { TAsaasSubscriptionStatus } from '../Types/Asaas/index.js'
import BaseJSON from './BaseJSON.js'
import CSubscriptionCharge from './CSubscriptionCharge.js'

export default class CSubscription extends BaseJSON {
  @Property
  plan!: string
  @Property
  value!: number
  @Property
  @FromJSON
  subscription!: Date
  @Property
  @Enum
  status!: TAsaasSubscriptionStatus
  @Property
  @FromJSON
  nextDueDate!: Date
  @Property
  @FromJSON(CSubscriptionCharge)
  charges!: CSubscriptionCharge[]

  static init(
    plan: string,
    value: number,
    subscription: Date,
    status: TAsaasSubscriptionStatus,
    nextDueDate: Date,
    charges: CSubscriptionCharge[],
    id?: string,
    timestamp?: number
  ): CSubscription {
    return this.createInitObject(arguments, [
      'plan',
      'value',
      'subscription',
      'status',
      'nextDueDate',
      'charges',
      'id',
      'timestamp'
    ])
  }
}
