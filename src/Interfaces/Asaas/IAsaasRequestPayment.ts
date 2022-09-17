import IAsaasCard from './IAsaasCard';
import IAsaasSplit from './IAsaasSplit';
import IAsaasCreditCardHolderInfo from './IAsaasCreditCardHolderInfo';
import { TAsaasBilling } from '../../Types/Asaas';
import { Enum } from '../../Decorators/Enum';
import BaseJSON from '../BaseJSON';
import { FromJSON } from '../../Decorators/FromJSON';
import { Property } from '../../Decorators/Property';

export default class IAsaasRequestPayment extends BaseJSON {
  @Property
  @Enum
  billingType?: TAsaasBilling;
  @Property
  value?: string;
  @Property
  description?: string;
  @Property
  externalReference?: string;
  @Property
  @FromJSON
  creditCardHolderInfo?: IAsaasCreditCardHolderInfo
  @Property
  customer?: string
  @Property
  dueDate?: string;;
  @Property
  remoteIp?: string;;
  @Property
  @FromJSON
  split?: IAsaasSplit;
  @FromJSON
  creditCard?: IAsaasCard;
  @Property
  creditCardToken?: string;
}
