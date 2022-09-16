import { Property } from '../Decorators';
import BaseJSON from './BaseJSON';

export default class IRegisterPushNotification extends BaseJSON {
  @Property
  platform: string;
  @Property
  token: string;

  constructor(platform: string, token: string,
    id?: string,
    timestamp?: number,
  ) {
    super({ id, timestamp })
    this.platform = platform
    this.token = token
  }

}
