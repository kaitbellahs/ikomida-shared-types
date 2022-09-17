import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class IAsaasSplit extends BaseJSON {
  @Property
  walletId?: string;
  @Property
  fixedValue?: number;
  @Property
  percentualValue?: number;
}
