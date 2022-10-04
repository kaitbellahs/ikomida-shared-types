import { Property } from '../Decorators/Property'
import { FromJSON } from '../Decorators/FromJSON'
import BaseJSON from './BaseJSON'
import CAddress from './CAddress'
import { Nullable } from '../Decorators'

export default class CVendorProfile extends BaseJSON {
  @Property
  areaCode!: number
  @Property
  contractName!: string
  @Property
  contractIdentity!: string
  @Property
  identity!: string
  @Property
  phone!: string
  @Property
  email!: string
  @Property
  @FromJSON
  address!: CAddress
  @Property
  @Nullable
  mainPicture?: string

  static init(
    areaCode: number,
    contractName: string,
    contractIdentity: string,
    identity: string,
    phone: string,
    email: string,
    address: CAddress,
    mainPicture?: string,
    id?: string,
    timestamp?: number
  ): CVendorProfile {
    return this.createInitObject(arguments)
  }
}
