import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators';

export default class IAsaasFine extends BaseJSON {
  @Property
  value?: number;
  @Property
  type?: string;
}
