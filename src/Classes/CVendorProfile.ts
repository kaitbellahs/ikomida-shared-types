import { Property } from '../Decorators/Property.js'
import { FromJSON } from '../Decorators/FromJSON.js'
import BaseJSON from './BaseJSON.js'
import CAddress from './CAddress.js'
import { Nullable } from '../Decorators/index.js'

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
  @Property
  @Nullable
  bannerPicture?: string

  static init(
    areaCode: number,
    contractName: string,
    contractIdentity: string,
    identity: string,
    phone: string,
    email: string,
    address: CAddress,
    mainPicture?: string,
    bannerPicture?: string,
    id?: string,
    timestamp?: number
  ): CVendorProfile {
    return this.createInitObject(arguments, [
      'areaCode',
      'contractName',
      'contractIdentity',
      'identity',
      'phone',
      'email',
      'address',
      'mainPicture',
      'bannerPicture',
      'id',
      'timestamp'
    ])
  }
}
