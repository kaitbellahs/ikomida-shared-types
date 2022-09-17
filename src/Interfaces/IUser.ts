import { Property } from '../Decorators/Property';
import { FromJSON } from '../Decorators/FromJSON';
import BaseJSON from './BaseJSON';
import IAddress from './IAddress';

export default class IUser extends BaseJSON {
  @Property
  role!: string;
  @Property
  name!: string;
  @Property
  lastName!: string;
  @Property
  identity!: string;
  @Property
  email!: string;
  @Property
  phone!: string;
  @Property
  areaCode!: string;
  @Property
  ikomidaID!: string;
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
  ): IUser {
    return this.createInitObject(arguments)
  }
}