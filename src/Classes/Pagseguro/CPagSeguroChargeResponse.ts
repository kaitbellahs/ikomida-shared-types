import CPagSeguroAmount from './CPagSeguroAmount';
import CPagSeguroPaymentMethod from './CPagSeguroPaymentMethod';
import CPagSeguroErrorResponse from './CPagSeguroErrorResponse';
import CPagSeguroPaymentResponse from './CPagSeguroPaymentResponse';
import CPagSeguroLink from './CPagSeguroLink';
import { FromJSON } from '../../Decorators/FromJSON';
import { Property } from '../../Decorators/Property';
import { TPagSeguroPaymentStatus } from '../../Types';
import { Enum } from '../../Decorators/Enum';
import { IMetadata } from '../../Interfaces';

export default class CPagSeguroChargeResponse extends CPagSeguroErrorResponse {
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
  paid_at?: Date;
  @Property
  description?: string;
  @Property
  @FromJSON
  amount?: CPagSeguroAmount;
  @Property
  @FromJSON
  payment_response?: CPagSeguroPaymentResponse;
  @Property
  @FromJSON
  payment_method?: CPagSeguroPaymentMethod;
  @FromJSON(CPagSeguroLink)
  links?: CPagSeguroLink[];
  @Property
  notification_urls?: string[];
  @Property
  metadata?: IMetadata;
  @Property
  notificationCode?: string;
}
