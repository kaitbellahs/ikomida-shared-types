import { Property } from '../Decorators';
import { Enum } from '../Decorators/Enum';
import { FromJSON } from '../Decorators/FromJSON';
import { TAsaasPaymentStatus } from '../Types';
import BaseJSON from './BaseJSON';

export default class ISubscriptionCharge extends BaseJSON {
  @Property
  value: number;
  @Property
  creditCardNumber: number;
  @Property
  creditCardBrand: string;
  @Property
  @FromJSON
  dueDate: Date;
  @Property
  @Enum
  status: TAsaasPaymentStatus;
  @Property
  invoiceUrl?: string;
  @Property
  transactionReceiptUrl?: string;
  @Property
  @FromJSON
  confirmedDate?: Date;

  constructor(
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
  ) {
    super({ id, timestamp })
    this.value = value
    this.creditCardNumber = creditCardNumber
    this.creditCardBrand = creditCardBrand
    this.dueDate = dueDate
    this.status = status
    this.invoiceUrl = invoiceUrl
    this.transactionReceiptUrl = transactionReceiptUrl
    this.confirmedDate = confirmedDate
  }

}