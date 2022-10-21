import { Nullable } from '../../Decorators/index.js'
import { Property } from '../../Decorators/Property.js'
import BaseJSON from '../BaseJSON.js'

export default class CPagSeguroGetAccessTokenResponse extends BaseJSON {
  @Property
  @Nullable
  token_type?: string
  @Property
  @Nullable
  access_token?: string
  @Property
  @Nullable
  expires_in?: string
  @Property
  @Nullable
  refresh_token?: string
  @Property
  @Nullable
  scope?: string
  @Property
  @Nullable
  account_id?: string
}
