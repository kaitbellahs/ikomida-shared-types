import { Property } from '../Decorators';
import BaseJSON from './BaseJSON';

export default class IRandCode extends BaseJSON {
  @Property
  count?: number;
  @Property
  length?: number;
  @Property
  charset?: string;
  @Property
  prefix?: string;
  @Property
  postfix?: string;
  @Property
  pattern?: string;
}
