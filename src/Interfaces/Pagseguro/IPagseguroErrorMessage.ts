import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class IPagseguroErrorMessage extends BaseJSON {
  @Property
  code?: number;
  @Property
  description?: string;
  @Property
  parameter_name?: string;
}
