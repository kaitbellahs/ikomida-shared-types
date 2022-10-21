import CAsaasErrors from './CAsaasErrors.js'
import { Property } from '../../Decorators/Property.js'

export default class CAsaasCardResponse extends CAsaasErrors {
  @Property
  creditCardNumber?: string
  @Property
  creditCardBrand?: string
  @Property
  creditCardToken?: string
}
