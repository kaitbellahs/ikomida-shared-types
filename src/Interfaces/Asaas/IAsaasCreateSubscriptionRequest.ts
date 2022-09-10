import IAsaasCard from './IAsaasCard';
import IAsaasSplit from './IAsaasSplit';
import IAsaasDiscount from './IAsaasDiscount';
import IAsaasFine from './IAsaasFine';
import IAsaasCreditCardHolderInfo from './IAsaasCreditCardHolderInfo';
import { TAsaasBilling } from '../../Types/Asaas';
import { Enum } from '../../Decorators/Enum';
import BaseJSON from '../BaseJSON';

export default class IAsaasCreateSubscriptionRequest extends BaseJSON {
  customer?: string;
  @Enum
  billingType?: TAsaasBilling;
  nextDueDate?: string;
  value?: number;
  cycle?: string;
  creditCardHolderInfo?: IAsaasCreditCardHolderInfo;
  remoteIp?: string;
  creditCardToken?: string;
  split?: IAsaasSplit;
  discount?: IAsaasDiscount;
  fine?: IAsaasFine;
  interest?: IAsaasFine;
  description?: string;
  endDate?: string;
  maxPayments?: number;
  creditCard?: IAsaasCard;
  externalReference?: string;
}
