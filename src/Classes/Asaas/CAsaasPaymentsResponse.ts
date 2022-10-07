import { FromJSON } from '../../Decorators/FromJSON.js'
import CAsaasErrors from './CAsaasErrors.js'
import CAsaasPayment from './CAsaasPayment.js'
import { Property } from '../../Decorators/Property.js'

export default class CAsaasPaymentsResponse extends CAsaasErrors {
  @Property
  object?: string
  @Property
  hasMore?: boolean
  @Property
  totalCount?: number
  @Property
  limit?: number
  @Property
  offset?: number
  @Property
  @FromJSON(CAsaasPayment)
  data?: CAsaasPayment[]
}
