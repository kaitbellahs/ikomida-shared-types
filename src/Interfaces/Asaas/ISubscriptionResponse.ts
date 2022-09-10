import ISubscriptionInterest from './ISubscriptionInterest';
import ISubscriptionFine from './ISubscriptionFine';
import ISubscriptionDiscount from './ISubscriptionDiscount';
import { TAsaasBilling } from '../../Types/Asaas';
import { Enum } from '../../Decorators/Enum';
import IAsaasErrors from './IAsaasErrors';

export default class ISubscriptionResponse extends IAsaasErrors {
  object?: string;
  id?: string;
  dateCreated?: string;
  customer?: string;
  @Enum
  billingType?: TAsaasBilling;
  cycle?: string;
  value?: number;
  nextDueDate?: string;
  description?: string;
  status?: string;
  discount?: ISubscriptionDiscount;
  fine?: ISubscriptionFine;
  interest?: ISubscriptionInterest;
  deleted?: boolean;
  paymentLink?: string;
}
