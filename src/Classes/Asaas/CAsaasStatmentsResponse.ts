import { FromJSON } from '../../Decorators/FromJSON'
import CAsaasErrors from './CAsaasErrors'
import CAsaasStatment from './CAsaasStatment'
import { Property } from '../../Decorators/Property'

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
