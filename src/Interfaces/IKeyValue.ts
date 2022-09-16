import { Property } from '../Decorators';
import BaseJSON from './BaseJSON';

export default class IKeyValue extends BaseJSON {
  @Property
  key?: string;
  @Property
  value?: null | string;
}
