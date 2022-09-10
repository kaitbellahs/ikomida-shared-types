import IPagSeguroErrorResponse from './IPagSeguroErrorResponse';

export default class IPagSeguroConnectTokenResponse extends IPagSeguroErrorResponse {
  token_type?: string;
  access_token?: string;
  expires_in?: string;
  refresh_token?: string;
  scope?: string;
  account_id?: string;
}
