import { Enum } from '../../Decorators/Enum.js'
import { Property } from '../../Decorators/Property.js'
import TPagseguroGetAccessTokenHint from '../../Types/Pagseguro/TPagseguroGetAccessTokenHint.js'
import BaseJSON from '../BaseJSON.js'

export default class CPagSeguroRevokeAccessTokenRequest extends BaseJSON {
  @Property
  @Enum
  token_type_hint!: TPagseguroGetAccessTokenHint
  @Property
  token!: string

  static init(token_type_hint: TPagseguroGetAccessTokenHint, token: string): CPagSeguroRevokeAccessTokenRequest {
    return this.createInitObject(arguments, ['token_type_hint', 'token'])
  }
}
