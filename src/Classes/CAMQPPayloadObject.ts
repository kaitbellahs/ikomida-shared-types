import { Nullable } from '../Decorators';
import { Property } from '../Decorators/Property';
import BaseJSON from './BaseJSON';
import CNotificationPayload from './CNotificationPayload';

export default class CAMQPPayloadObject extends BaseJSON {
  @Property
  message!: any;
  @Property
  @Nullable
  userId?: string;
  @Property
  @Nullable
  contractId?: string;
  @Property
  @Nullable
  areaCode?: string;
  @Property
  @Nullable
  phone?: string;
  @Property
  @Nullable
  platform?: string;
}
