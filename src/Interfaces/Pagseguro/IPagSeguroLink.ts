import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators';

export default class IPagSeguroLink extends BaseJSON {
  @Property
  rel?: string;
  @Property
  href?: string;
  @Property
  media?: string;
  @Property
  type?: string;
}
