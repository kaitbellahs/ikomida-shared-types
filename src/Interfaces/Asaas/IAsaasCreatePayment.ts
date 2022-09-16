import IAsaasPaymentCustomer from './IAsaasPaymentCustomer';
import IAsaasCard from './IAsaasCard';
import { TAsaasBilling } from '../../Types/Asaas';
import { Enum } from '../../Decorators/Enum';
import BaseJSON from '../BaseJSON';
import { FromJSON } from '../../Decorators/FromJSON';
import IAsaasPayment from './IAsaasPayment';
import { Property } from '../../Decorators';

export default class IAsaasCreatePayment extends BaseJSON {
  @Property
  @FromJSON
  customer?: IAsaasPaymentCustomer;
  @Property
  @Enum
  type?: TAsaasBilling;
  @Property
  amount?: number;
  @Property
  description?: string;
  @Property
  reference?: string;
  @Property
  walletId?: string;;
  @Property
  @FromJSON
  payment?: IAsaasPayment;
  @Property
  @FromJSON
  creditCard?: IAsaasCard;
  @Property
  creditCardToken?: string;
}
