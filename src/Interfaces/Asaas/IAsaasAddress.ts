import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators';

export default class IAsaasAddress extends BaseJSON {
  @Property
  postalCode?: string;
  @Property
  name?: string;
  @Property
  number?: string;
  @Property
  complement?: string;
  @Property
  province?: string;
}
