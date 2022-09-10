import IAsaasCard from './IAsaasCard';
import IAsaasSplit from './IAsaasSplit';
import IAsaasCreditCardHolderInfo from './IAsaasCreditCardHolderInfo';
import { TAsaasBilling } from '../../Types/Asaas';
import { Enum } from '../../Decorators/Enum';
import BaseJSON from '../BaseJSON';

export default class IAsaasRequestPayment extends BaseJSON {
  @Enum
  billingType?: TAsaasBilling;
  value?: string;
  description?: string;
  externalReference?: string;
  creditCardHolderInfo?: IAsaasCreditCardHolderInfo;
  customer?: string;
  dueDate?: string;
  remoteIp?: string;
  split?: IAsaasSplit;
  creditCard?: IAsaasCard;
  creditCardToken?: string;
}
