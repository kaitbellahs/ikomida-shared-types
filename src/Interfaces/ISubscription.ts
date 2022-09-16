import { Property } from '../Decorators';
import { Enum } from '../Decorators/Enum';
import { FromJSON } from '../Decorators/FromJSON';
import { TAsaasSubscriptionStatus } from '../Types/Asaas';
import BaseJSON from './BaseJSON';
import ISubscriptionCharge from './ISubscriptionCharge';

export default class ISubscription extends BaseJSON {
  @Property
  plan: string;
  @Property
  value: number;
  @Property
  @FromJSON
  subscription: Date;
  @Property
  @Enum
  status: TAsaasSubscriptionStatus;
  @Property
  @FromJSON
  nextDueDate: Date;
  @Property
  @FromJSON(ISubscriptionCharge)
  charges: ISubscriptionCharge[];

  constructor(
    plan: string,
    value: number,
    subscription: Date,
    status: TAsaasSubscriptionStatus,
    nextDueDate: Date,
    charges: ISubscriptionCharge[],
    id?: string,
    timestamp?: number,
  ) {
    super({ id, timestamp })
    this.plan = plan
    this.value = value
    this.subscription = subscription
    this.status = status
    this.nextDueDate = nextDueDate
    this.charges = charges
  }

}
