import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class CPagseguroCreateChargeConfig extends BaseJSON {
  host?: string;
  @Property
  uri?: string;
}
