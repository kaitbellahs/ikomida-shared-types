import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators';

export default class IPagSeguroRecurring extends BaseJSON {
  @Property
  type?: string;
}
