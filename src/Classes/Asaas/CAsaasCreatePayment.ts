import CAsaasPaymentCustomer from './CAsaasPaymentCustomer.js'
import CAsaasCard from './CAsaasCard.js'
import { TAsaasBilling } from '../../Types/Asaas/index.js'
import { Enum } from '../../Decorators/Enum.js'
import BaseJSON from '../BaseJSON.js'
import { FromJSON } from '../../Decorators/FromJSON.js'
import CAsaasPayment from './CAsaasPayment.js'
import { Property } from '../../Decorators/Property.js'

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
