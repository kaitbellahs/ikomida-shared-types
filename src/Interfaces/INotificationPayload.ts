import { Property } from '../Decorators/Property';
import { FromJSON } from '../Decorators/FromJSON';
import BaseJSON from './BaseJSON';
import INotification from './INotification';
import INotificationData from './INotificationData';

export default class INotificationPayload extends BaseJSON {
  @Property
  @FromJSON
  notification?: INotification;
  @Property
  @FromJSON
  data?: INotificationData;
  @Property
  token?: string;
  @Property
  id?: string;
  @Property
  priority?: number;
  @Property
  ikomidaId?: string;
  @Property
  topic?: string;
  @Property
  condition?: string;
  @Property
  title?: string;
  @Property
  body?: string;
}
