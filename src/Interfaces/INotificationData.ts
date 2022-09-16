import { Property } from '../Decorators';
import BaseJSON from './BaseJSON';

export default class INotificationData extends BaseJSON {
  @Property
  method?: string;
  @Property
  message?: string;
  @Property
  uri?: string;
  @Property
  logon?: string;
  @Property
  payload?: string;
}
