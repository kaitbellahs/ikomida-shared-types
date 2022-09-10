import BaseJSON from '../BaseJSON';
import IPagseguroErrorMessage from './IPagseguroErrorMessage';

export default class IPagSeguroErrorResponse extends BaseJSON {
  error_messages?: IPagseguroErrorMessage[];
}
