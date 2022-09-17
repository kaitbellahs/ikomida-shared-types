import CAsaasCard from './CAsaasCard';
import CAsaasSplit from './CAsaasSplit';
import CAsaasDiscount from './CAsaasDiscount';
import CAsaasFine from './CAsaasFine';
import CAsaasCreditCardHolderInfo from './CAsaasCreditCardHolderInfo';
import { TAsaasBilling } from '../../Types/Asaas';
import { Enum } from '../../Decorators/Enum';
import BaseJSON from '../BaseJSON';
import { FromJSON } from '../../Decorators/FromJSON';
import { Property } from '../../Decorators/Property';

export default class CAsaasCreateSubscriptionRequest extends BaseJSON {
  @Property
  customer?: string;
  @Property
  @Enum
  billingType?: TAsaasBilling;
  @Property
  nextDueDate?: Date;
  @Property
  value?: number;
  @Property
  cycle?: string;
  @Property
  @FromJSON
  creditCardHolderInfo?: CAsaasCreditCardHolderInfo;
  @Property
  remoteIp?: string;
  @Property
  creditCardToken?: string;
  @Property
  @FromJSON
  split?: CAsaasSplit;
  @Property
  @FromJSON
  discount?: CAsaasDiscount;
  @Property
  @FromJSON
  fine?: CAsaasFine;
  @Property
  @FromJSON
  interest?: CAsaasFine;
  @Property
  description?: string;
  @Property
  endDate?: string;
  @Property
  maxPayments?: number;
  @Property
  @FromJSON
  creditCard?: CAsaasCard;
  @Property
  externalReference?: string;
}
