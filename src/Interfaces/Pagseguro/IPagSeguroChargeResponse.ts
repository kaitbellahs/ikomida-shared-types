import IMetadata from '../IMetadata';
import IPagSeguroAmount from './IPagSeguroAmount';
import IPagSeguroPaymentMethod from './IPagSeguroPaymentMethod';
import IPagSeguroErrorResponse from './IPagSeguroErrorResponse';
import IPagSeguroPaymentResponse from './IPagSeguroPaymentResponse';
import IPagSeguroLink from './IPagSeguroLink';

export default class IPagSeguroChargeResponse extends IPagSeguroErrorResponse {
  id?: string;
  reference_id?: string;
  status?: string;
  created_at?: Date;
  paid_at?: Date;
  description?: string;
  amount?: IPagSeguroAmount;
  payment_response?: IPagSeguroPaymentResponse;
  payment_method?: IPagSeguroPaymentMethod;
  links?: IPagSeguroLink[];
  notification_urls?: string[];
  metadata?: IMetadata;
  notificationCode?: string;
}
