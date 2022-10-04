import { Property } from '../Decorators/Property'
import { Enum } from '../Decorators/Enum'
import { FromJSON } from '../Decorators/FromJSON'
import { TAsaasSubscriptionStatus } from '../Types/Asaas'
import BaseJSON from './BaseJSON'
import CSubscriptionCharge from './CSubscriptionCharge'

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
    return this.createInitObject(arguments)
  }
}
