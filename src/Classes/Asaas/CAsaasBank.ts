import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class CAsaasBank extends BaseJSON {
  @Property
  ispb?: string;
  @Property
  code?: string;
  @Property
  name?: string;
}
