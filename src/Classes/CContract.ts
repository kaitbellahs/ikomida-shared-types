import { Property } from '../Decorators/Property';
import { FromJSON } from '../Decorators/FromJSON';
import BaseJSON from './BaseJSON';
import CAddress from './CAddress';
import CApp from './CApp';
import CCreditCardRequest from './CCreditCardRequest';
import CPlan from './CPlan';
import { Nullable } from '../Decorators';

export default class CContract extends BaseJSON {
  @Property
  ikomidaID!: string;
  @Property
  contractName!: string;
  @Property
  name!: string;
  @Property
  lastName!: string;
  @Property
  contractIdentity!: string;
  @Property
  email!: string;
  @Property
  phone!: string;
  @Property
  areaCode!: number;
  @Property
  @FromJSON
  plan?: CPlan;
  @Property
  @Nullable
  identity?: string;
  @Property
  @Nullable
  status?: string;
  @Property
  @Nullable
  termId?: string;
  @Property
  @Nullable
  password?: string;
  @Property
  @FromJSON
  @Nullable
  address?: CAddress;
  @Property
  @Nullable
  referredBy?: string;
  @Property(CApp)
  @FromJSON(CApp)
  @Nullable
  apps?: CApp[];
  @Property
  @Nullable
  phoneValidationCode?: number;
  @Property
  signature?: string;
  @Property
  @FromJSON
  @Nullable
  payment?: CCreditCardRequest;
  @Property
  @FromJSON
  @Nullable
  createdAt?: Date;

  static init(
    ikomidaID: string,
    contractName: string,
    name: string,
    lastName: string,
    contractIdentity: string,
    email: string,
    phone: string,
    areaCode: number,
    plan?: CPlan,
    identity?: string,
    status?: string,
    termId?: string,
    password?: string,
    address?: CAddress,
    referredBy?: string,
    apps?: CApp[],
    phoneValidationCode?: number,
    signature?: string,
    payment?: CCreditCardRequest,
    createdAt?: Date,
    id?: string,
    timestamp?: number
  ): CContract {
    return this.createInitObject(arguments);
  }
}
