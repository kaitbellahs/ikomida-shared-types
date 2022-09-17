import IAsaasSplit from './IAsaasSplit';
import IAsaasDiscount from './IAsaasDiscount';
import IAsaasFine from './IAsaasFine';
import IAsaasErrors from './IAsaasErrors';
import IAsaasCardResponse from './IAsaasCardResponse';
import { TAsaasBilling, TAsaasSubscriptionStatus } from '../../Types/Asaas';
import { Enum } from '../../Decorators/Enum';
import { FromJSON } from '../../Decorators/FromJSON';
import { Property } from '../../Decorators/Property';

export default class IAsaasCreateSubscriptionResponse extends IAsaasErrors {
  @Property
  object?: string;
  @Property
  id?: string;
  @Property
  @FromJSON
  dateCreated?: Date;
  @Property
  customer?: string;;
  @Property
  @Enum
  billingType?: TAsaasBilling;
  @Property
  cycle?: string;;
  @Property
  value?: number;;
  @Property
  nextDueDate?: Date;
  @Property
  @Enum
  status?: TAsaasSubscriptionStatus
  @Property
  deleted?: boolean;;
  @Property
  @FromJSON
  creditCard?: IAsaasCardResponse;
  @Property
  paymentLink?: string;
  @Property
  @FromJSON
  discount?: IAsaasDiscount
  @Property
  @FromJSON
  fine?: IAsaasFine;
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
  split?: IAsaasSplit;
}
