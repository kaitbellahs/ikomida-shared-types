import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class IAsaasFine extends BaseJSON {
  @Property
  value?: number;
  @Property
  type?: string;
}
