import BaseJSON from './BaseJSON';
import INotification from './INotification';
import INotificationData from './INotificationData';

export default class INotificationPayload extends BaseJSON {
  notification?: INotification;
  data?: INotificationData;
  token?: string;
  id?: string;
  priority?: number;
  ikomidaId?: string;
  topic?: string;
  condition?: string;
  title?: string;
  body?: string;
}
