import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators';

export default class ISubscriptionInterest extends BaseJSON {
  @Property
  value?: number;
}
