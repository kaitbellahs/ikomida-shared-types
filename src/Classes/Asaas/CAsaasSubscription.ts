import CAsaasNewCustomer from './CAsaasNewCustomer.js'
import CAsaasCard from './CAsaasCard.js'
import BaseJSON from '../BaseJSON.js'
import { FromJSON } from '../../Decorators/FromJSON.js'
import { Property } from '../../Decorators/Property.js'
import TAsaasBilling from '../../Types/Asaas/TAsaasBilling.js'
import CPlan from '../CPlan.js'

export default class CAsaasSubscription extends BaseJSON {
  @Property
  @FromJSON
  plan!: CPlan
  @Property
  @FromJSON
  billingType!: TAsaasBilling
  @Property
  @FromJSON
  customer!: CAsaasNewCustomer
  @Property
  ikomidaID!: string
  @Property
  @FromJSON
  payment?: CAsaasCard
  @Property
  externalReference?: string
  @Property
  observations?: string

  static init(
    plan: CPlan,
    billingType: TAsaasBilling,
    customer: CAsaasNewCustomer,
    ikomidaID: string,
    payment?: CAsaasCard,
    externalReference?: string,
    observations?: string,
    id?: string,
    timestamp?: number
  ): CPlan {
    return this.createInitObject(arguments, [
      'plan',
      'billingType',
      'customer',
      'ikomidaID',
      'payment',
      'externalReference',
      'observations',
      'id',
      'timestamp'
    ])
  }
}
