import CAsaasCard from './CAsaasCard';
import CAsaasSplit from './CAsaasSplit';
import CAsaasDiscount from './CAsaasDiscount';
import CAsaasFine from './CAsaasFine';
import CAsaasCreditCardHolderInfo from './CAsaasCreditCardHolderInfo';
import { TAsaasBilling, TAssasSubscriptionCycle } from '../../Types/Asaas';
import { Enum } from '../../Decorators/Enum';
import BaseJSON from '../BaseJSON';
import { FromJSON } from '../../Decorators/FromJSON';
import { Property } from '../../Decorators/Property';
import { Nullable } from '../../Decorators';
export default class CAsaasCreateSubscriptionRequest extends BaseJSON {
  @Property
  customer!: string;
  @Property
  @Enum
  billingType!: TAsaasBilling;
  @Property
  dueDate!: string;
  @Property
  value!: number;
  @Property
  @Enum
  cycle!: TAssasSubscriptionCycle;
  @Property
  @FromJSON
  creditCardHolderInfo!: CAsaasCreditCardHolderInfo;
  @Property
  remoteIp!: string;
  @Property
  creditCardToken?: string;
  @Property
  @FromJSON
  @Nullable
  split?: CAsaasSplit;
  @Property
  @FromJSON
  @Nullable
  discount?: CAsaasDiscount;
  @Property
  @FromJSON
  @Nullable
  fine?: CAsaasFine;
  @Property
  @FromJSON
  @Nullable
  interest?: CAsaasFine;
  @Property
  @Nullable
  description?: string;
  @Property
  @Nullable
  endDate?: string;
  @Property
  @Nullable
  maxPayments?: number;
  @Property
  @FromJSON
  @Nullable
  creditCard?: CAsaasCard;
  @Property
  @Nullable
  externalReference?: string;

  static init(
    customer: string,
    billingType: TAsaasBilling,
    dueDate: string,
    value: number,
    cycle: TAssasSubscriptionCycle,
    creditCardHolderInfo: CAsaasCreditCardHolderInfo,
    remoteIp: string,
    creditCardToken?: string,
    split?: CAsaasSplit,
    discount?: CAsaasDiscount,
    fine?: CAsaasFine,
    interest?: CAsaasFine,
    description?: string,
    endDate?: string,
    maxPayments?: number,
    creditCard?: CAsaasCard,
    externalReference?: string,
  ): CAsaasCreateSubscriptionRequest {
    return this.createInitObject(arguments);
  }
}
