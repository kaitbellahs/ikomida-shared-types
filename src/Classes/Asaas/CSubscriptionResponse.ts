import CSubscriptionInterest from './CSubscriptionInterest';
import CSubscriptionFine from './CSubscriptionFine';
import CSubscriptionDiscount from './CSubscriptionDiscount';
import { TAsaasBilling } from '../../Types/Asaas';
import { Enum } from '../../Decorators/Enum';
import CAsaasErrors from './CAsaasErrors';
import { Property } from '../../Decorators/Property';
import { FromJSON } from '../../Decorators/FromJSON';
import { TAsaasSignatureStatus } from '../../Types';

export default class CSubscriptionResponse extends CAsaasErrors {
  @Property
  object?: string;
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
  value?: number;
  @Property
  nextDueDate?: string;
  @Property
  description?: string;
  @Property
  @Enum
  status?: TAsaasSignatureStatus;
  @Property
  @FromJSON
  discount?: CSubscriptionDiscount;
  @Property
  @FromJSON
  fine?: CSubscriptionFine;
  @Property
  @FromJSON
  interest?: CSubscriptionInterest;
  @Property
  deleted?: boolean;
  @Property
  paymentLink?: string;
}
