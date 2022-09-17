import { Property } from '../Decorators/Property';
import BaseJSON from './BaseJSON';

export default class IKeyValue extends BaseJSON {
  @Property
  key?: string;
  @Property
  value?: null | string;
}
