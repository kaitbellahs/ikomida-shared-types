import { Property } from '../Decorators/Property';
import { Enum } from '../Decorators/Enum';
import { FromJSON } from '../Decorators/FromJSON';
import { TAsaasPaymentStatus } from '../Types';
import BaseJSON from './BaseJSON';
import { Nullable } from '../Decorators';

export default class CSubscriptionCharge extends BaseJSON {
  @Property
  value!: number;
  @Property
  creditCardNumber!: number;
  @Property
  creditCardBrand!: string;
  @Property
  @FromJSON
  dueDate!: Date;
  @Property
  @Enum
  status!: TAsaasPaymentStatus;
  @Property
  @Nullable
  invoiceUrl?: string;
  @Property
  @Nullable
  transactionReceiptUrl?: string;
  @Property
  @FromJSON
  @Nullable
  confirmedDate?: Date;

  static init(
    value: number,
    creditCardNumber: number,
    creditCardBrand: string,
    dueDate: Date,
    status: TAsaasPaymentStatus,
    invoiceUrl?: string,
    transactionReceiptUrl?: string,
    confirmedDate?: Date,
    id?: string,
    timestamp?: number,
  ): CSubscriptionCharge {
    return this.createInitObject(arguments);
  }
}
