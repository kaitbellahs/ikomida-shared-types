import IAsaasCardResponse from './IAsaasCardResponse';
import IAsaasRefund from './IAsaasRefund';
import IAsaasFine from './IAsaasFine';
import IAsaasDiscount from './IAsaasDiscount';
import { TAsaasBilling } from '../../Types/Asaas';
import { Enum } from '../../Decorators/Enum';
import BaseJSON from '../BaseJSON';
import { FromJSON } from '../../Decorators/FromJSON';
import { Property } from '../../Decorators/Property';

export default class IAsaasPayment extends BaseJSON {
  @Property
  object?: string;
  @Property
  id?: string;
  @Property
  dateCreated?: string;
  @Property
  customer?: string;
  @Property
  value?: number;
  @Property
  netValue?: number;
  @Property
  @Enum
  billingType?: TAsaasBilling
  @Property
  status?: string;;
  @Property
  dueDate?: string;;
  @Property
  originalDueDate?: Date
  @Property
  invoiceURL?: string;;
  @Property
  invoiceNumber?: string
  @Property
  deleted?: boolean;;
  @Property
  postalService?: boolean
  @Property
  anticipated?: boolean;
  @Property
  originalValue?: number;
  @Property
  interestValue?: number
  @Property
  description?: string;
  @Property
  paymentLink?: string;
  @Property
  canBePaidAfterDueDate?: Date
  @Property
  pixTransaction?: string
  @Property
  paymentDate?: string;
  @Property
  clientPaymentDate?: string;
  @Property
  installmentNumber?: number;;
  @Property
  transactionReceiptURL?: string
  @Property
  nossoNumero?: string;
  @Property
  externalReference?: any;
  @Property
  bankSlipURL?: string;;
  @Property
  @FromJSON(IAsaasRefund)
  refunds?: IAsaasRefund[]
  @Property
  confirmedDate?: Date
  @Property
  creditDate?: string;;
  @Property
  estimatedCreditDate?: string;;
  @Property
  lastInvoiceViewedDate?: string;
  @Property
  lastBankSlipViewedDate?: string
  @Property
  @FromJSON
  discount?: IAsaasDiscount;
  @FromJSON
  fine?: IAsaasFine;
  @FromJSON
  interest?: IAsaasFine;
  @FromJSON
  creditCard?: IAsaasCardResponse;
}
