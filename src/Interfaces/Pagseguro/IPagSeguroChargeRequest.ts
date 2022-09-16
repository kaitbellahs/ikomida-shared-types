import IMetadata from '../IMetadata';
import IPagSeguroRecurring from './IPagSeguroRecurring';
import IPagSeguroPaymentMethod from './IPagSeguroPaymentMethod';
import IPagSeguroAmount from './IPagSeguroAmount';
import BaseJSON from '../BaseJSON';
import { FromJSON } from '../../Decorators/FromJSON';
import { Property } from '../../Decorators';

export default class IPagSeguroChargeRequest extends BaseJSON {
  @Property
  @FromJSON
  amount?: IPagSeguroAmount;
  @Property
  @FromJSON
  payment_method?: IPagSeguroPaymentMethod;;
  @Property
  @FromJSON
  recurring?: IPagSeguroRecurring
  @Property
  notification_urls?: string[];
  @Property
  reference_id?: string;
  @Property
  description?: string;
  @Property
  metadata?: IMetadata;
}
