import { Enum } from '../../Decorators/Enum';
import { TAsaasStatment } from '../../Types/Asaas';
import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class IAsaasStatment extends BaseJSON {
  @Property
  object?: string;
  @Property
  id?: string;
  @Property
  value?: number;
  @Property
  balance?: number;
  @Property
  @Enum
  type?: TAsaasStatment
  @Property
  date?: string;;
  @Property
  description?: string
  @Property
  paymentID?: string;;
  @Property
  transferID?: string;;
  @Property
  anticipationID?: string
  @Property
  billID?: string;;
  @Property
  invoiceID?: string;;
  @Property
  paymentDunningID?: string;
  @Property
  creditBureauReportID?: string;
}
