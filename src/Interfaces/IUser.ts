import { Property } from '../Decorators';
import { FromJSON } from '../Decorators/FromJSON';
import BaseJSON from './BaseJSON';
import IAddress from './IAddress';

export default class IUser extends BaseJSON {
  @Property
  role: string;
  @Property
  name: string;
  @Property
  lastName: string;
  @Property
  identity: string;
  @Property
  email: string;
  @Property
  phone: string;
  @Property
  areaCode: string;
  @Property
  ikomidaID: string;
  @Property
  contractName?: string;
  @Property
  termId?: string;
  @Property
  platform?: string;
  @Property
  deviceId?: string;
  @Property
  cnpj?: string;
  @Property
  referredBy?: string;
  @Property
  password?: string;
  @Property
  oldPass?: string;
  @Property
  newPass?: string;
  @Property
  reNewPass?: string;
  @Property
  @FromJSON
  address?: IAddress;
  @Property
  signature?: string;
  @Property
  phoneValidationCode?: string;
  @Property
  avatar?: string;
  @Property
  code?: string;
  @Property
  referralCode?: string;
  @Property
  hash?: string;

  constructor(
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
    cnpj?: string,
    referredBy?: string,
    password?: string,
    oldPass?: string,
    newPass?: string,
    reNewPass?: string,
    address?: IAddress,
    signature?: string,
    phoneValidationCode?: string,
    avatar?: string,
    code?: string,
    referralCode?: string,
    hash?: string,
    id?: string,
    timestamp?: number,
  ) {
    super({ id, timestamp })
    this.role = role
    this.name = name
    this.lastName = lastName
    this.identity = identity
    this.email = email
    this.phone = phone
    this.areaCode = areaCode
    this.ikomidaID = ikomidaID
    this.contractName = contractName
    this.termId = termId
    this.platform = platform
    this.deviceId = deviceId
    this.cnpj = cnpj
    this.referredBy = referredBy
    this.password = password
    this.oldPass = oldPass
    this.newPass = newPass
    this.reNewPass = reNewPass
    this.address = address
    this.signature = signature
    this.phoneValidationCode = phoneValidationCode
    this.avatar = avatar
    this.code = code
    this.referralCode = referralCode
    this.hash = hash
  }

}