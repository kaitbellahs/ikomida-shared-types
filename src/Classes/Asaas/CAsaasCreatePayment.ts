import CAsaasPaymentCustomer from './CAsaasPaymentCustomer'
import CAsaasCard from './CAsaasCard'
import { TAsaasBilling } from '../../Types/Asaas'
import { Enum } from '../../Decorators/Enum'
import BaseJSON from '../BaseJSON'
import { FromJSON } from '../../Decorators/FromJSON'
import CAsaasPayment from './CAsaasPayment'
import { Property } from '../../Decorators/Property'

export default class CAsaasCreatePayment extends BaseJSON {
  @Property
  @FromJSON
  customer?: CAsaasPaymentCustomer
  @Property
  @Enum
  type?: TAsaasBilling
  @Property
  amount?: number
  @Property
  description?: string
  @Property
  reference?: string
  @Property
  walletId?: string
  @Property
  @FromJSON
  payment?: CAsaasPayment
  @Property
  @FromJSON
  creditCard?: CAsaasCard
  @Property
  creditCardToken?: string
}
