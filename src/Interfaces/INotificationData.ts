import BaseJSON from './BaseJSON';

export default class INotificationData extends BaseJSON {
  method?: string;
  message?: string;
  uri?: string;
  logon?: string;
  payload?: string;
}
