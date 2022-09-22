import CAsaasNewCustomer from './CAsaasNewCustomer';
import CAsaasCard from './CAsaasCard';
import BaseJSON from '../BaseJSON';
import { FromJSON } from '../../Decorators/FromJSON';
import { Property } from '../../Decorators/Property';

export default class CAsaasSubscription extends BaseJSON {
  @Property
  plan?: {
    price?: number;
    name?: string;
    id?: string;
  };
  @Property
  @FromJSON
  payment?: CAsaasCard;
  @Property
  @FromJSON
  customer?: CAsaasNewCustomer;
  @Property
  ikomidaID?: string;
  @Property
  externalReference?: string;
  @Property
  observations?: string;
}
