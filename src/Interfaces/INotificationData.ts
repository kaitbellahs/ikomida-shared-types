import { Property } from '../Decorators/Property';
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
