import ISubscriptionInterest from './ISubscriptionInterest';
import ISubscriptionFine from './ISubscriptionFine';
import ISubscriptionDiscount from './ISubscriptionDiscount';
import { TAsaasBilling } from '../../Types/Asaas';
import { Enum } from '../../Decorators/Enum';
import IAsaasErrors from './IAsaasErrors';
import { Property } from '../../Decorators';
import { FromJSON } from '../../Decorators/FromJSON';

export default class ISubscriptionResponse extends IAsaasErrors {
  @Property
  object?: string;
  @Property
  id?: string;
  @Property
  dateCreated?: string;
  @Property
  customer?: string;
  @Property
  @Enum
  billingType?: TAsaasBilling;
  @Property
  cycle?: string;
  @Property
  value?: number;;
  @Property
  nextDueDate?: string;
  @Property
  description?: string
  @Property
  status?: string;;
  @Property
  @FromJSON
  discount?: ISubscriptionDiscount
  @Property
  @FromJSON
  fine?: ISubscriptionFine;
  @Property
  @FromJSON
  interest?: ISubscriptionInterest
  @Property
  deleted?: boolean;
  @Property
  paymentLink?: string;
}
