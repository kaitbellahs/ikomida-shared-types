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
  @Nullable
  id?: string;
  @Property
  ikomidaID!: string;
  @Property
  contractName!: string;
  @Property
  @Nullable
  status?: string;
  @Property
  @Nullable
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
  @Nullable
  password?: string;
  @Property
  @FromJSON
  @Nullable
  address?: CAddress;
  @Property
  areaCode!: number;
  @Property
  @Nullable
  referredBy?: string;
  @Property
  @FromJSON
  plan!: CPlan;
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
}
