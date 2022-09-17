import { Enum } from '../../Decorators/Enum';
import { FromJSON } from '../../Decorators/FromJSON';
import { TAsaasDiscount } from '../../Types/Asaas';
import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class CAsaasDiscount extends BaseJSON {
  @Property
  value?: number;
  @Property
  @Enum
  type?: TAsaasDiscount;
  @Property
  @FromJSON
  limitDate?: Date;
  @Property
  dueDateLimitDays?: number;
}
