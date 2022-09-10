import { Enum } from '../../Decorators/Enum';
import { TAsaasDiscount } from '../../Types/Asaas';
import BaseJSON from '../BaseJSON';

export default class IAsaasDiscount extends BaseJSON {
  value?: number;
  @Enum
  type?: TAsaasDiscount;
  limitDate?: Date;
  dueDateLimitDays?: number;
}
