import { Enum } from '../../Decorators/Enum';
import { TPIX } from '../../Types';
import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class CAsaasTransferRequest extends BaseJSON {
  @Property
  @Enum
  pixAddressKeyType?: TPIX;
  @Property
  value?: number;
  @Property
  description?: string;
  @Property
  pixAddressKey?: string;
  @Property
  scheduleDate?: string;
}
