import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class ISubscriptionInterest extends BaseJSON {
  @Property
  value?: number;
}
