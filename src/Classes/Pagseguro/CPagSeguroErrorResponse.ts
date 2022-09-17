import { FromJSON } from '../../Decorators/FromJSON';
import BaseJSON from '../BaseJSON';
import CPagseguroErrorMessage from './CPagseguroErrorMessage';
import { Property } from '../../Decorators/Property';

export default class CPagSeguroErrorResponse extends BaseJSON {
  @Property
  @FromJSON(CPagseguroErrorMessage)
  error_messages?: CPagseguroErrorMessage[];
}
