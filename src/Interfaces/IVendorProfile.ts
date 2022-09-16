import { Property } from '../Decorators';
import { FromJSON } from '../Decorators/FromJSON';
import BaseJSON from './BaseJSON';
import IAddress from './IAddress';

export default class IVendorProfile extends BaseJSON {
  @Property
  areaCode: number;
  @Property
  contractName: string;
  @Property
  cnpj: string;
  @Property
  identity: string;
  @Property
  phone: string;
  @Property
  email: string;
  @Property
  @FromJSON
  address: IAddress;
  @Property
  mainPicture?: string;

  constructor(
    areaCode: number,
    contractName: string,
    cnpj: string,
    identity: string,
    phone: string,
    email: string,
    address: IAddress,
    mainPicture?: string,
    id?: string,
    timestamp?: number,
  ) {
    super({ id, timestamp })
    this.areaCode = areaCode
    this.contractName = contractName
    this.cnpj = cnpj
    this.identity = identity
    this.phone = phone
    this.email = email
    this.address = address
    this.mainPicture = mainPicture
  }

}