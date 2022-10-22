import CAsaasNewCustomer from './CAsaasNewCustomer.js'
import CAsaasCard from './CAsaasCard.js'
import BaseJSON from '../BaseJSON.js'
import { FromJSON } from '../../Decorators/FromJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CAsaasSubscription extends BaseJSON {
  @Property
  plan?: {
    price?: number
    name?: string
    id?: string
  }
  @Property
  @FromJSON
  payment?: CAsaasCard
  @Property
  @FromJSON
  customer?: CAsaasNewCustomer
  @Property
  ikomidaID?: string
  @Property
  externalReference?: string
  @Property
  observations?: string
}
