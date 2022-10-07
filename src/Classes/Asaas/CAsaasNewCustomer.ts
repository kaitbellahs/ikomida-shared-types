import CAsaasCustomer from './CAsaasCustomer.js'
import { Property } from '../../Decorators/Property.js'

export default class CAsaasNewCustomer extends CAsaasCustomer {
  @Property
  externalReference?: string
  @Property
  observations?: string
}
