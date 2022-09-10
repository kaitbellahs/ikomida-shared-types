import { Enum } from '../../Decorators/Enum';
import { TPIX } from '../../Types';
import BaseJSON from '../BaseJSON';

export default class IAsaasTransferRequest extends BaseJSON {
  @Enum
  pixAddressKeyType?: TPIX;
  value?: number;
  description?: string;
  pixAddressKey?: string;
  scheduleDate?: string;
}
