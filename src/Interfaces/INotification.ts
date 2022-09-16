import { Property } from '../Decorators';
import BaseJSON from './BaseJSON';

export default class INotification extends BaseJSON {
  @Property
  title: string;
  @Property
  body: string;
  @Property
  method?: string;
  @Property
  uri?: string;
  @Property
  logon?: string;

  constructor(
    title: string,
    body: string,
    method?: string,
    uri?: string,
    logon?: string,
    id?: string,
    timestamp?: number,
  ) {
    super({ id, timestamp })
    this.title = title
    this.body = body
    this.method = method
    this.uri = uri
    this.logon = logon
  }

}
