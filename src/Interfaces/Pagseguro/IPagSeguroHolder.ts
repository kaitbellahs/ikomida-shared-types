import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class IPagSeguroHolder extends BaseJSON {
  @Property
  name?: string;
}
