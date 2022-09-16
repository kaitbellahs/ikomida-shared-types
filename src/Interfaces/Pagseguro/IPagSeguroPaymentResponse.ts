import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators';

export default class IPagSeguroPaymentResponse extends BaseJSON {
  @Property
  code?: string;
  @Property
  message?: string;
  @Property
  reference?: string;
}
