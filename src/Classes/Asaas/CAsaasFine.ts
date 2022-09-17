import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class CAsaasFine extends BaseJSON {
  @Property
  value?: number;
  @Property
  type?: string;
}
