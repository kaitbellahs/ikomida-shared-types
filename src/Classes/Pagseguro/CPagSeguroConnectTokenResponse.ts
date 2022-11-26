import CPagSeguroErrorResponse from './CPagSeguroErrorResponse.js'
import { Property } from '../../Decorators/Property.js'

export default class CPagSeguroConnectTokenResponse extends CPagSeguroErrorResponse {
  @Property
  token_type?: string
  @Property
  access_token?: string
  @Property
  expires_in?: string
  @Property
  refresh_token?: string
  @Property
  scope?: string
  @Property
  account_id?: string
}
