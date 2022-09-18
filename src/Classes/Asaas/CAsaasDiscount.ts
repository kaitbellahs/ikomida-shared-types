import { Enum } from '../../Decorators/Enum';
import { FromJSON } from '../../Decorators/FromJSON';
import { TAsaasDiscount } from '../../Types/Asaas';
import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';
import { Nullable } from '../../Decorators';

export default class CAsaasDiscount extends BaseJSON {
  @Property
  @Nullable
  value?: number;
  @Property
  @Enum
  @Nullable
  type?: TAsaasDiscount;
  @Property
  @FromJSON
  @Nullable
  limitDate?: string;
  @Property
  @Nullable
  dueDateLimitDays?: number;

  static init(value?: number, type?: TAsaasDiscount, limitDate?: string, dueDateLimitDays?: number): CAsaasDiscount {
    return this.createInitObject(arguments);
  }
}
