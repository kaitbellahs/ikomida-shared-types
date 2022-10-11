import { Enum } from '../../Decorators/Enum.js'
import { FromJSON } from '../../Decorators/FromJSON.js'
import { TAsaasDiscount } from '../../Types/Asaas/index.js'
import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'
import { Nullable } from '../../Decorators/index.js'

export default class CAsaasDiscount extends BaseJSON {
  @Property
  @Nullable
  value?: number
  @Property
  @Enum
  @Nullable
  type?: TAsaasDiscount
  @Property
  @FromJSON
  @Nullable
  limitDate?: string
  @Property
  @Nullable
  dueDateLimitDays?: number

  static init(value?: number, type?: TAsaasDiscount, limitDate?: string, dueDateLimitDays?: number): CAsaasDiscount {
    return this.createInitObject(arguments, ['value', 'type', 'limitDate', 'dueDateLimitDays'])
  }
}
