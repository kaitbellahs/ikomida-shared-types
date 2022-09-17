import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class IPagSeguroCardHolder extends BaseJSON {
  @Property
  name?: string;
}
