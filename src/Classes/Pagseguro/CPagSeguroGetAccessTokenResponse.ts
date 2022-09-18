import { Nullable } from '../../Decorators';
import { Property } from '../../Decorators/Property';
import BaseJSON from '../BaseJSON';

export default class CPagSeguroGetAccessTokenResponse extends BaseJSON {
  @Property
  @Nullable
  token_type?: string;
  @Property
  @Nullable
  access_token?: string;
  @Property
  @Nullable
  expires_in?: string;
  @Property
  @Nullable
  refresh_token?: string;
  @Property
  @Nullable
  scope?: string;
  @Property
  @Nullable
  account_id?: string;
}
