import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators';

export default class ISubscriptionFine extends BaseJSON {
  @Property
  value?: number;
}
