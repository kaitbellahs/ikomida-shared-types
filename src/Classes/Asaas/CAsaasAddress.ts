import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CAsaasAddress extends BaseJSON {
  @Property
  postalCode!: string
  @Property
  name!: string
  @Property
  number!: string
  @Property
  complement!: string
  @Property
  province!: string

  static init(postalCode: string, name: string, number: string, complement: string, province: string): CAsaasAddress {
    return this.createInitObject(arguments, ['postalCode', 'name', 'number', 'complement', 'province'])
  }
}
