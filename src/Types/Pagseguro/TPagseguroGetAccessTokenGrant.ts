import TBaseType from '../TBaseType';

export default class TPagseguroGetAccessTokenGrant extends TBaseType {
  static SMS = new TPagseguroGetAccessTokenGrant('sms');
  static AUTHORIZATION_CODE = new TPagseguroGetAccessTokenGrant('authorization_code');
  static CHALLENGE = new TPagseguroGetAccessTokenGrant('challenge');
  static REFRESH_TOKEN = new TPagseguroGetAccessTokenGrant('refresh_token');
}
