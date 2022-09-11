import BaseJSON from './BaseJSON';

export default class IRegisterPushNotification extends BaseJSON {
  platform?: string;
  token?: string;
}
