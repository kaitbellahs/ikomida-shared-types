import { Property } from '../Decorators';
import { FromJSON } from '../Decorators/FromJSON';
import BaseJSON from './BaseJSON';
import IAddress from './IAddress';
import IApp from './IApp';
import ICreditCardRequest from './ICreditCardRequest';
import IPlan from './IPlan';

export default class IContract extends BaseJSON {
  @Property
  id?: string;
  @Property
  ikomidaID!: string;
  @Property
  contractName!: string;
  @Property
  status?: string;
  @Property
  termId?: string;
  @Property
  name!: string;
  @Property
  lastName!: string;
  @Property
  cnpj!: string;
  @Property
  identity!: string;
  @Property
  email!: string;
  @Property
  phone!: string;
  @Property
  password?: string;
  @Property
  @FromJSON
  address?: IAddress;
  @Property
  areaCode!: number;
  @Property
  referredBy?: string;
  @Property
  @FromJSON
  plan!: IPlan;
  @Property
  @FromJSON(IApp)
  apps?: IApp[];
  @Property
  phoneValidationCode?: number;
  @Property
  signature?: string;
  @Property
  @FromJSON
  payment?: ICreditCardRequest
  @Property
  @FromJSON
  createdAt?: Date;
  @Property
  timestamp?: number;
}
