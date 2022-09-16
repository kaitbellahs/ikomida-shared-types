import { Enum } from '../../Decorators/Enum';
import { FromJSON } from '../../Decorators/FromJSON';
import { TPagSeguroPaymentMethod } from '../../Types/Pagseguro';
import IAsaasCard from '../Asaas/IAsaasCard';
import BaseJSON from '../BaseJSON';

class IPagseguroCreateChargeConfig {
  host?: string;
  @Property
  uri?: string;
} import { Property } from '../../Decorators';

export default class IPagSeguroCreateCharge extends BaseJSON {
  @Property
  id?: string;
  @Property
  reference?: string;
  @Property
  amount?: number;
  @Property
  @Enum
  type?: TPagSeguroPaymentMethod
  @Property
  statementID?: string;;
  @Property
  @FromJSON
  config?: IPagseguroCreateChargeConfig
  @Property
  contractID?: string
  @Property
  @FromJSON
  card?: IAsaasCard;
  @Property
  cardToken?: string;
  @Property
  description?: string;
}
