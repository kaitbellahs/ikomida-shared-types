import { Property } from '../Decorators/Property';
import { Enum } from '../Decorators/Enum';
import { FromJSON } from '../Decorators/FromJSON';
import { TAsaasSubscriptionStatus } from '../Types/Asaas';
import BaseJSON from './BaseJSON';
import ISubscriptionCharge from './ISubscriptionCharge';

export default class ISubscription extends BaseJSON {
  @Property
  plan!: string;
  @Property
  value!: number;
  @Property
  @FromJSON
  subscription!: Date;
  @Property
  @Enum
  status!: TAsaasSubscriptionStatus;
  @Property
  @FromJSON
  nextDueDate!: Date;
  @Property
  @FromJSON(ISubscriptionCharge)
  charges!: ISubscriptionCharge[];

  static init(
    plan: string,
    value: number,
    subscription: Date,
    status: TAsaasSubscriptionStatus,
    nextDueDate: Date,
    charges: ISubscriptionCharge[],
    id?: string,
    timestamp?: number,
  ): ISubscription {
    return this.createInitObject(arguments)
  }
}