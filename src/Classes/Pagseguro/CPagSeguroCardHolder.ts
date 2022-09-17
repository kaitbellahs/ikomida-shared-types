import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class CPagSeguroCardHolder extends BaseJSON {
  @Property
  name?: string;
}
