import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators';

export default class IPagSeguroCardHolder extends BaseJSON {
  @Property
  name?: string;
}
