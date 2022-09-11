import BaseJSON from '../BaseJSON';

export default class IAsaasRefund extends BaseJSON {
  dateCreated?: Date;
  status?: string;
  value?: number;
  description?: string;
  transactionReceiptURL?: string;
}
