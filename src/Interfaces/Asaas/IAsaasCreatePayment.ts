import IAsaasPaymentCustomer from './IAsaasPaymentCustomer';
import IAsaasCard from './IAsaasCard';
import { TAsaasBilling } from '../../Types/Asaas';
import { Enum } from '../../Decorators/Enum';
import BaseJSON from '../BaseJSON';

class IPagSeguroPayment {
  code?: string;
}

export default class IAsaasCreatePayment extends BaseJSON {
  customer?: IAsaasPaymentCustomer;
  @Enum
  type?: TAsaasBilling;
  amount?: number;
  description?: string;
  reference?: string;
  walletId?: string;
  payment?: IPagSeguroPayment;
  creditCard?: IAsaasCard;
  creditCardToken?: string;
}
