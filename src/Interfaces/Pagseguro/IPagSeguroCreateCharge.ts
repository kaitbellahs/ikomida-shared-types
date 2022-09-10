import { Enum } from '../../Decorators/Enum';
import { TPagSeguroPaymentMethod } from '../../Types/Pagseguro';
import IAsaasCard from '../Asaas/IAsaasCard';
import BaseJSON from '../BaseJSON';

class IPagseguroCreateChargeConfig {
  host?: string;
  uri?: string;
}
export default class IPagSeguroCreateCharge extends BaseJSON {
  reference?: string;
  amount?: number;
  @Enum
  type?: TPagSeguroPaymentMethod;
  statementID?: string;
  config?: IPagseguroCreateChargeConfig;
  contractID?: string;
  card?: IAsaasCard;
  cardToken?: string;
  description?: string;
}
