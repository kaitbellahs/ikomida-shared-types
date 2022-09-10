import { Enum } from '../../Decorators/Enum';
import { TPIX } from '../../Types';
import BaseJSON from '../BaseJSON';

export default class IAsaasTransfer extends BaseJSON {
  @Enum
  pixAddressKeyType?: TPIX;
  amount?: number;
  description?: string;
  pixAddressKey?: string;
}
