import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class IPagSeguroAddress extends BaseJSON {
  @Property
  street?: string;
  @Property
  number?: string;
  @Property
  complement?: string;
  @Property
  locality?: string;
  @Property
  city?: string;
  @Property
  region_code?: string;
  @Property
  country?: string;
  @Property
  postal_code?: string;
}
