import { Property } from '../Decorators/Property';
import BaseJSON from './BaseJSON';

export default class IRegisterPushNotification extends BaseJSON {
  @Property
  platform!: string;
  @Property
  token!: string;

  static init(platform: string, token: string,
    id?: string,
    timestamp?: number,
  ): IRegisterPushNotification {
    return this.createInitObject(arguments)
  }
}