import { Nullable } from '../../Decorators/index.js'
import { Enum } from '../../Decorators/Enum.js'
import { Property } from '../../Decorators/Property.js'
import { TPagseguroGetAccessTokenGrant } from '../../Types/Pagseguro/index.js'
import BaseJSON from '../BaseJSON.js'

export default class CPagSeguroGetAccessTokenRequest extends BaseJSON {
  @Property
  @Enum
  grant_type!: TPagseguroGetAccessTokenGrant
  @Property
  @Nullable
  refresh_token?: string
  @Property
  @Nullable
  code?: string
  @Property
  @Nullable
  sms_code?: string
  @Property
  @Nullable
  redirect_uri?: string
  @Property
  @Nullable
  email?: string
  @Property
  @Nullable
  scope?: string

  static init(
    grant_type: TPagseguroGetAccessTokenGrant,
    code?: string,
    sms_code?: string,
    redirect_uri?: string,
    email?: string,
    scope?: string,
    refresh_token?: string
  ): CPagSeguroGetAccessTokenRequest {
    return this.createInitObject(arguments, [
      'grant_type',
      'code',
      'sms_code',
      'redirect_uri',
      'email',
      'scope',
      'refresh_token'
    ])
  }
}
