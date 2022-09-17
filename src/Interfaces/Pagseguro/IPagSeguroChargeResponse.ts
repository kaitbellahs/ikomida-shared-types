import IMetadata from '../IMetadata';
import IPagSeguroAmount from './IPagSeguroAmount';
import IPagSeguroPaymentMethod from './IPagSeguroPaymentMethod';
import IPagSeguroErrorResponse from './IPagSeguroErrorResponse';
import IPagSeguroPaymentResponse from './IPagSeguroPaymentResponse';
import IPagSeguroLink from './IPagSeguroLink';
import { FromJSON } from '../../Decorators/FromJSON';
import { Property } from '../../Decorators/Property';
import { TPagSeguroPaymentStatus } from '../../Types';
import { Enum } from '../../Decorators/Enum';

export default class IPagSeguroChargeResponse extends IPagSeguroErrorResponse {
  @Property
  id?: string;
  @Property
  reference_id?: string;
  @Property
  @Enum
  status?: TPagSeguroPaymentStatus;
  @Property
  @FromJSON
  created_at?: Date;
  @Property
  @FromJSON
  paid_at?: Date;;
  @Property
  description?: string;;
  @Property
  @FromJSON
  amount?: IPagSeguroAmount;;
  @Property
  @FromJSON
  payment_response?: IPagSeguroPaymentResponse
  @Property
  @FromJSON
  payment_method?: IPagSeguroPaymentMethod;
  @FromJSON(IPagSeguroLink)
  links?: IPagSeguroLink[];
  @Property
  notification_urls?: string[];
  @Property
  metadata?: IMetadata;
  @Property
  notificationCode?: string;
}
