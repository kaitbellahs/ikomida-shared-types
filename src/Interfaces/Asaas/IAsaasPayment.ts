import IAsaasCardResponse from './IAsaasCardResponse';
import IAsaasRefund from './IAsaasRefund';
import IAsaasFine from './IAsaasFine';
import IAsaasDiscount from './IAsaasDiscount';
import { TAsaasBilling } from '../../Types/Asaas';
import { Enum } from '../../Decorators/Enum';
import BaseJSON from '../BaseJSON';

export default class IAsaasPayment extends BaseJSON {
  object?: string;
  id?: string;
  dateCreated?: string;
  customer?: string;
  value?: number;
  netValue?: number;
  @Enum
  billingType?: TAsaasBilling;
  status?: string;
  dueDate?: string;
  originalDueDate?: string;
  invoiceURL?: string;
  invoiceNumber?: string;
  deleted?: boolean;
  postalService?: boolean;
  anticipated?: boolean;
  originalValue?: number;
  interestValue?: number;
  description?: string;
  paymentLink?: string;
  canBePaidAfterDueDate?: boolean;
  pixTransaction?: string;
  paymentDate?: string;
  clientPaymentDate?: string;
  installmentNumber?: number;
  transactionReceiptURL?: string;
  nossoNumero?: string;
  externalReference?: string;
  bankSlipURL?: string;
  refunds?: IAsaasRefund[];
  confirmedDate?: string;
  creditDate?: string;
  estimatedCreditDate?: string;
  lastInvoiceViewedDate?: string;
  lastBankSlipViewedDate?: string;
  discount?: IAsaasDiscount;
  fine?: IAsaasFine;
  interest?: IAsaasFine;
  creditCard?: IAsaasCardResponse;
}
