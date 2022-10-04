import CAsaasCustomer from './CAsaasCustomer'
import { Property } from '../../Decorators/Property'

export default class CAsaasNewCustomer extends CAsaasCustomer {
  @Property
  externalReference?: string
  @Property
  observations?: string
}
