import { Property } from '../Decorators/Property';
import BaseJSON from './BaseJSON';
import INotificationPayload from './INotificationPayload';

export default class IAMQPPayloadObject extends BaseJSON {
  @Property
  message!: any;
  @Property
  userId?: string;
  @Property
  contractId?: string;
  @Property
  areaCode?: string;
  @Property
  phone?: string;
  @Property
  platform?: string;
}
