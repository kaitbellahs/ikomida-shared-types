import IAsaasSplit from './IAsaasSplit';
import IAsaasDiscount from './IAsaasDiscount';
import IAsaasFine from './IAsaasFine';
import IAsaasErrors from './IAsaasErrors';
import IAsaasCardResponse from './IAsaasCardResponse';
import { TAsaasBilling, TAsaasSubscriptionStatus } from '../../Types/Asaas';
import { Enum } from '../../Decorators/Enum';

export default class IAsaasCreateSubscriptionResponse extends IAsaasErrors {
  object?: string;
  id?: string;
  dateCreated?: Date;
  customer?: string;
  @Enum
  billingType?: TAsaasBilling;
  cycle?: string;
  value?: number;
  nextDueDate?: string;
  @Enum
  status?: TAsaasSubscriptionStatus;
  deleted?: boolean;
  creditCard?: IAsaasCardResponse;
  paymentLink?: string;
  discount?: IAsaasDiscount;
  fine?: IAsaasFine;
  interest?: IAsaasFine;
  description?: string;
  endDate?: string;
  maxPayments?: number;
  split?: IAsaasSplit;
}
