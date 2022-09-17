import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class CSubscriptionFine extends BaseJSON {
  @Property
  value?: number;
}
