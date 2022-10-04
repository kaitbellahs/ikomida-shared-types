import { Property } from '../Decorators/Property'
import { FromJSON } from '../Decorators/FromJSON'
import BaseJSON from './BaseJSON'
import CAddress from './CAddress'
import { Nullable } from '../Decorators'

export default class CUser extends BaseJSON {
  @Property
  role!: string
  @Property
  name!: string
  @Property
  lastName!: string
  @Property
  identity!: string
  @Property
  email!: string
  @Property
  phone!: string
  @Property
  areaCode!: string
  @Property
  ikomidaID!: string
  @Property
  @Nullable
  contractName?: string
  @Property
  @Nullable
  termId?: string
  @Property
  @Nullable
  platform?: string
  @Property
  @Nullable
  deviceId?: string
  @Property
  @Nullable
  contractIdentity?: string
  @Property
  @Nullable
  referredBy?: string
  @Property
  @Nullable
  password?: string
  @Property
  @Nullable
  oldPass?: string
  @Property
  @Nullable
  newPass?: string
  @Property
  @Nullable
  reNewPass?: string
  @Property
  @FromJSON
  @Nullable
  address?: CAddress
  @Property
  @Nullable
  signature?: string
  @Property
  @Nullable
  phoneValidationCode?: string
  @Property
  @Nullable
  avatar?: string
  @Property
  @Nullable
  code?: string
  @Property
  @Nullable
  referralCode?: string
  @Property
  @Nullable
  hash?: string

  static init(
    role: string,
    name: string,
    lastName: string,
    identity: string,
    email: string,
    phone: string,
    areaCode: string,
    ikomidaID: string,
    contractName?: string,
    termId?: string,
    platform?: string,
    deviceId?: string,
    contractIdentity?: string,
    referredBy?: string,
    password?: string,
    oldPass?: string,
    newPass?: string,
    reNewPass?: string,
    address?: CAddress,
    signature?: string,
    phoneValidationCode?: string,
    avatar?: string,
    code?: string,
    referralCode?: string,
    hash?: string,
    id?: string,
    timestamp?: number
  ): CUser {
    return this.createInitObject(arguments)
  }
}
