import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'
import { Nullable } from '../../Decorators/index.js'

export default class CAsaasCreditCardHolderInfo extends BaseJSON {
  @Property
  name!: string
  @Property
  email!: string
  @Property
  cpfCnpj!: string
  @Property
  postalCode!: string
  @Property
  addressNumber!: string
  @Property
  @Nullable
  addressComplement?: string
  @Property
  @Nullable
  phone?: string
  @Property
  @Nullable
  mobilePhone?: string

  static init(
    name: string,
    email: string,
    cpfCnpj: string,
    postalCode: string,
    addressNumber: string,
    addressComplement?: string,
    phone?: string,
    mobilePhone?: string
  ): CAsaasCreditCardHolderInfo {
    return this.createInitObject(arguments, [
      'name',
      'email',
      'cpfCnpj',
      'postalCode',
      'addressNumber',
      'addressComplement',
      'phone',
      'mobilePhone'
    ])
  }
}
