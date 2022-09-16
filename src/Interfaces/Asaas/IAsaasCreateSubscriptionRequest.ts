import IAsaasCard from './IAsaasCard';
import IAsaasSplit from './IAsaasSplit';
import IAsaasDiscount from './IAsaasDiscount';
import IAsaasFine from './IAsaasFine';
import IAsaasCreditCardHolderInfo from './IAsaasCreditCardHolderInfo';
import { TAsaasBilling } from '../../Types/Asaas';
import { Enum } from '../../Decorators/Enum';
import BaseJSON from '../BaseJSON';
import { FromJSON } from '../../Decorators/FromJSON';
import { Property } from '../../Decorators';

export default class IAsaasCreateSubscriptionRequest extends BaseJSON {
  @Property
  customer?: string;
  @Property
  @Enum
  billingType?: TAsaasBilling
  @Property
  nextDueDate?: Date;
  @Property
  value?: number;
  @Property
  cycle?: string;;
  @Property
  @FromJSON
  creditCardHolderInfo?: IAsaasCreditCardHolderInfo
  @Property
  remoteIp?: string;;
  @Property
  creditCardToken?: string;;
  @Property
  @FromJSON
  split?: IAsaasSplit
  @Property
  @FromJSON
  discount?: IAsaasDiscount
  @Property
  @FromJSON
  fine?: IAsaasFine;
  @Property
  @FromJSON
  interest?: IAsaasFine;
  @Property
  description?: string;
  @Property
  endDate?: string;
  @Property
  maxPayments?: number;
  @Property
  @FromJSON
  creditCard?: IAsaasCard;
  @Property
  externalReference?: string;
}
