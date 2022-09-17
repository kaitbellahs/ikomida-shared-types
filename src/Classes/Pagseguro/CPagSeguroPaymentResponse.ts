import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class CPagSeguroPaymentResponse extends BaseJSON {
  @Property
  code?: string;
  @Property
  message?: string;
  @Property
  reference?: string;
}
