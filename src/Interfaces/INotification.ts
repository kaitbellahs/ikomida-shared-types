import BaseJSON from './BaseJSON';

export default class INotification extends BaseJSON {
  title?: string;
  body?: string;
  method?: string;
  uri?: string;
  logon?: string;
}
