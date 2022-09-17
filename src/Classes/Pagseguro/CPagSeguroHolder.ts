import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class CPagSeguroHolder extends BaseJSON {
  @Property
  name?: string;
}
