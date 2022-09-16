import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators';

export default class IAsaasBank extends BaseJSON {
  @Property
  ispb?: string;
  @Property
  code?: string;
  @Property
  name?: string;
}
