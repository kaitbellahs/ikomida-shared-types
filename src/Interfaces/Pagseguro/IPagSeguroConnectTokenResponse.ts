import IPagSeguroErrorResponse from './IPagSeguroErrorResponse';
import { Property } from '../../Decorators';

export default class IPagSeguroConnectTokenResponse extends IPagSeguroErrorResponse {
  @Property
  token_type?: string;
  @Property
  access_token?: string;
  @Property
  expires_in?: string;
  @Property
  refresh_token?: string;
  @Property
  scope?: string;
  @Property
  account_id?: string;
}
