import { Property } from '../Decorators/Property';
import { FromJSON } from '../Decorators/FromJSON';
import BaseJSON from './BaseJSON';
import IAddress from './IAddress';

export default class IVendorProfile extends BaseJSON {
  @Property
  areaCode!: number;
  @Property
  contractName!: string;
  @Property
  cnpj!: string;
  @Property
  identity!: string;
  @Property
  phone!: string;
  @Property
  email!: string;
  @Property
  @FromJSON
  address!: IAddress;
  @Property
  mainPicture?: string;

  static init(
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
  ): IVendorProfile {
    return this.createInitObject(arguments)
  }
}