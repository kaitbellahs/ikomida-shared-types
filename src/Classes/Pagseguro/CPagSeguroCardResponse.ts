import { FromJSON } from '../../Decorators/FromJSON.js'
import CPagSeguroErrorResponse from './CPagSeguroErrorResponse.js'
import CPagSeguroHolder from './CPagSeguroHolder.js'
import { Property } from '../../Decorators/Property.js'

export default class CPagSeguroCardResponse extends CPagSeguroErrorResponse {
  @Property
  brand?: string
  @Property
  first_digits?: string
  @Property
  last_digits?: string
  @Property
  exp_month?: string
  @Property
  exp_year?: string
  @Property
  @FromJSON
  holder?: CPagSeguroHolder
}
