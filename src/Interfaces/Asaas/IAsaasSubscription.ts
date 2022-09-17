import IAsaasNewCustomer from './IAsaasNewCustomer';
import IAsaasCard from './IAsaasCard';
import BaseJSON from '../BaseJSON';
import { FromJSON } from '../../Decorators/FromJSON';
import { Property } from '../../Decorators/Property';

export default class IAsaasSubscription extends BaseJSON {
  @Property
  plan?: {
    price?: number;
    name?: string;
  };
  @Property
  @FromJSON
  payment?: IAsaasCard;;
  @Property
  @FromJSON
  customer?: IAsaasNewCustomer
  @Property
  ikomidaID?: string;
  @Property
  externalReference?: string;
  @Property
  observations?: string;
}
