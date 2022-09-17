import { FromJSON } from '../../Decorators/FromJSON';
import BaseJSON from '../BaseJSON';
import CPagSeguroAddress from './CPagSeguroAddress';
import { Property } from '../../Decorators/Property';

export default class CPagSeguroBoletoHolder extends BaseJSON {
  @Property
  @FromJSON
  address?: CPagSeguroAddress;
  @Property
  name?: string;
  @Property
  tax_id?: string;
  @Property
  email?: string;
}
