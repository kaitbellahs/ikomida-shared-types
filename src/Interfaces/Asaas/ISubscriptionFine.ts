import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class ISubscriptionFine extends BaseJSON {
  @Property
  value?: number;
}
