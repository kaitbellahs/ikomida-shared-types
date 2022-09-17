import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class IAsaasAccountNumber extends BaseJSON {
  @Property
  agency?: string;
  @Property
  account?: string;
  @Property
  accountDigit?: string;
}
