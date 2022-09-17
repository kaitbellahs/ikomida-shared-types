import { Nullable } from '../Decorators';
import { Property } from '../Decorators/Property';
import BaseJSON from './BaseJSON';

export default class CLocation extends BaseJSON {
  @Property
  @Nullable
  latitude?: string;
  @Property
  @Nullable
  longitude?: string;
}
