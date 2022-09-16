import { FromJSON } from '../../Decorators/FromJSON';
import BaseJSON from '../BaseJSON';
import IPagSeguroAddress from './IPagSeguroAddress';
import { Property } from '../../Decorators';

export default class IPagSeguroBoletoHolder extends BaseJSON {
  @Property
  @FromJSON
  address?: IPagSeguroAddress;
  @Property
  name?: string;
  @Property
  tax_id?: string;
  @Property
  email?: string;
}
