import CAsaasCustomer from './CAsaasCustomer.js'
import { Property } from '../../Decorators/Property.js'

export default class CAsaasPaymentCustomer extends CAsaasCustomer {
  @Property
  ip?: string
}
