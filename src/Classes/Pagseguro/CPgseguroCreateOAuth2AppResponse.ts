import { Nullable } from '../../Decorators/index.js'
import { Property } from '../../Decorators/Property.js'
import BaseJSON from '../BaseJSON.js'

export default class CPgseguroCreateOAuth2AppResponse extends BaseJSON {
  @Property
  @Nullable
  client_id?: string
  @Property
  @Nullable
  site?: string
  @Property
  @Nullable
  description?: string
  @Property
  @Nullable
  name?: string
  @Property
  @Nullable
  client_secret?: string
  @Property
  @Nullable
  redirect_uri?: string
  @Property
  @Nullable
  logo?: string
  @Property
  @Nullable
  account_id?: string
  @Property
  @Nullable
  client_type?: string

  static init(
    client_id?: string,
    site?: string,
    description?: string,
    name?: string,
    client_secret?: string,
    redirect_uri?: string,
    logo?: string,
    account_id?: string,
    client_type?: string
  ): CPgseguroCreateOAuth2AppResponse {
    return this.createInitObject(arguments, [
      'client_id',
      'site',
      'description',
      'name',
      'client_secret',
      'redirect_uri',
      'logo',
      'account_id',
      'client_type'
    ])
  }
}
