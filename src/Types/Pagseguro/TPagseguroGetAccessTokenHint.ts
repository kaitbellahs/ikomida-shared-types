import TBaseType from '../TBaseType.js'

export default class TPagseguroGetAccessTokenHint extends TBaseType {
  static ACCESS_TOKEN = new TPagseguroGetAccessTokenHint('access_token')
  static REFRESH_TOKEN = new TPagseguroGetAccessTokenHint('refresh_token')
}
