import CPagSeguroRecurring from './CPagSeguroRecurring';
import CPagSeguroPaymentMethod from './CPagSeguroPaymentMethod';
import CPagSeguroAmount from './CPagSeguroAmount';
import BaseJSON from '../BaseJSON';
import { FromJSON } from '../../Decorators/FromJSON';
import { Property } from '../../Decorators/Property';
import { IMetadata } from '../../Interfaces';

export default class CPagSeguroChargeRequest extends BaseJSON {
  @Property
  @FromJSON
  amount?: CPagSeguroAmount;
  @Property
  @FromJSON
  payment_method?: CPagSeguroPaymentMethod;
  @Property
  @FromJSON
  recurring?: CPagSeguroRecurring;
  @Property
  notification_urls?: string[];
  @Property
  reference_id?: string;
  @Property
  description?: string;
  @Property
  metadata?: IMetadata;
}
