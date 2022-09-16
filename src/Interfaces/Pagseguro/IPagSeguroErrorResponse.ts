import { FromJSON } from '../../Decorators/FromJSON';
import BaseJSON from '../BaseJSON';
import IPagseguroErrorMessage from './IPagseguroErrorMessage';
import { Property } from '../../Decorators';

export default class IPagSeguroErrorResponse extends BaseJSON {
  @Property
  @FromJSON(IPagseguroErrorMessage)
  error_messages?: IPagseguroErrorMessage[];
}
