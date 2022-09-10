import IAsaasNewCustomer from './IAsaasNewCustomer';
import IAsaasCard from './IAsaasCard';
import BaseJSON from '../BaseJSON';

export default class IAsaasSubscription extends BaseJSON {
  plan?: {
    price?: number;
    name?: string;
  };
  payment?: IAsaasCard;
  customer?: IAsaasNewCustomer;
  ikomidaID?: string;
  externalReference?: string;
  observations?: string | null;
}
