import BaseJSON from '../BaseJSON'
import { Property } from '../../Decorators/Property'
import { Nullable } from '../../Decorators'

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
    return this.createInitObject(arguments)
  }
}
