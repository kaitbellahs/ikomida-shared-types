import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CAsaasCard extends BaseJSON {
  @Property
  holderName!: string
  @Property
  number!: number
  @Property
  expiryMonth!: number
  @Property
  expiryYear!: number
  @Property
  ccv!: number

  static init(
    holderName: string,
    number: number,
    expiryMonth: number,
    expiryYear: number,
    ccv: number,
    id?: string
  ): CAsaasCard {
    return this.createInitObject(arguments)
  }
}
