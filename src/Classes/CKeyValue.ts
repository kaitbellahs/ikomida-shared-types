import { Nullable } from '../Decorators';
import { Property } from '../Decorators/Property';
import BaseJSON from './BaseJSON';

export default class CKeyValue extends BaseJSON {
  @Property
  @Nullable
  key?: string;
  @Property
  @Nullable
  value?: null | string;
}
