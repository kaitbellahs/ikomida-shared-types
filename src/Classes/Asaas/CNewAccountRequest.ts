import { Enum } from '../../Decorators/Enum.js'
import { TCompany } from '../../Types/index.js'
import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'
import { Nullable } from '../../Decorators/index.js'

export default class CNewAccountRequest extends BaseJSON {
  @Property
  name!: string
  @Property
  email!: string
  @Property
  cpfCnpj!: string
  @Property
  birthDate!: string
  @Property
  @Enum
  companyType!: TCompany
  @Property
  mobilePhone!: string
  @Property
  address!: string
  @Property
  addressNumber!: string
  @Property
  province!: string
  @Property
  postalCode!: string
  @Property
  @Nullable
  phone?: string
  @Property
  @Nullable
  complement?: string

  static init(
    name: string,
    email: string,
    cpfCnpj: string,
    birthDate: string,
    companyType: TCompany,
    mobilePhone: string,
    address: string,
    addressNumber: string,
    province: string,
    postalCode: string,
    phone?: string,
    complement?: string
  ): CNewAccountRequest {
    return this.createInitObject(arguments)
  }
}
