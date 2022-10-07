import { FromJSON } from '../../Decorators/FromJSON.js'
import CAsaasErrors from './CAsaasErrors.js'
import CAsaasStatment from './CAsaasStatment.js'
import { Property } from '../../Decorators/Property.js'

export default class CAsaasStatmentsResponse extends CAsaasErrors {
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
  @FromJSON(CAsaasStatment)
  data?: CAsaasStatment[]
}
