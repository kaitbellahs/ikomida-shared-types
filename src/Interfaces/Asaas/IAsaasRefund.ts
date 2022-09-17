import { FromJSON } from '../../Decorators/FromJSON';
import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class IAsaasRefund extends BaseJSON {
  @Property
  @FromJSON
  dateCreated?: Date;
  @Property
  status?: string;
  @Property
  value?: number;
  @Property
  description?: string;
  @Property
  transactionReceiptURL?: string;
}
