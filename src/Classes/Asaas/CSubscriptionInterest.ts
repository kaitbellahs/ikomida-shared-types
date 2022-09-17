import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class CSubscriptionInterest extends BaseJSON {
  @Property
  value?: number;
}
