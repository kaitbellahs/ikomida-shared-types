import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators';

export default class IPagSeguroHolder extends BaseJSON {
  @Property
  name?: string;
}
