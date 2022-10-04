import CAsaasErrors from './CAsaasErrors'
import { Property } from '../../Decorators/Property'

export default class CAsaasCardResponse extends CAsaasErrors {
  @Property
  creditCardNumber?: string
  @Property
  creditCardBrand?: string
  @Property
  creditCardToken?: string
}
