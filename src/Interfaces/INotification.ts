import { Property } from '../Decorators/Property';
import BaseJSON from './BaseJSON';

export default class INotification extends BaseJSON {
  @Property
  title!: string;
  @Property
  body!: string;
  @Property
  method?: string;
  @Property
  uri?: string;
  @Property
  logon?: string;

  static init(
    title: string,
    body: string,
    method?: string,
    uri?: string,
    logon?: string,
    id?: string,
    timestamp?: number,
  ): INotification {
    return this.createInitObject(arguments)
  }
}