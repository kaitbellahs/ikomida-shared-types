import { Enum } from '../../Decorators/Enum';
import { TAsaasStatment } from '../../Types/Asaas';
import BaseJSON from '../BaseJSON';

export default class IAsaasStatment extends BaseJSON {
  object?: string;
  id?: string;
  value?: number;
  balance?: number;
  @Enum
  type?: TAsaasStatment;
  date?: string;
  description?: string;
  paymentID?: string;
  transferID?: string;
  anticipationID?: string;
  billID?: string;
  invoiceID?: string;
  paymentDunningID?: string;
  creditBureauReportID?: string;
}
