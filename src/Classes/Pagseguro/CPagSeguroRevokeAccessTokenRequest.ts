import { Enum } from '../../Decorators/Enum';
import { Property } from '../../Decorators/Property';
import TPagseguroGetAccessTokenHint from '../../Types/Pagseguro/TPagseguroGetAccessTokenHint';
import BaseJSON from '../BaseJSON';

export default class CPagSeguroRevokeAccessTokenRequest extends BaseJSON {
  @Property
  @Enum
  token_type_hint!: TPagseguroGetAccessTokenHint;
  @Property
  token!: string;

  static init(token_type_hint: TPagseguroGetAccessTokenHint, token: string): CPagSeguroRevokeAccessTokenRequest {
    return this.createInitObject(arguments);
  }
}
