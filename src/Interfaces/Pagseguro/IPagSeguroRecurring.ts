import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class IPagSeguroRecurring extends BaseJSON {
  @Property
  type?: string;
}
