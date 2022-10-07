import CAsaasCard from './CAsaasCard.js'
import CAsaasSplit from './CAsaasSplit.js'
import CAsaasCreditCardHolderInfo from './CAsaasCreditCardHolderInfo.js'
import { TAsaasBilling } from '../../Types/Asaas/index.js'
import { Enum } from '../../Decorators/Enum.js'
import BaseJSON from '../BaseJSON.js'
import { FromJSON } from '../../Decorators/FromJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CAsaasRequestPayment extends BaseJSON {
  @Property
  @Enum
  billingType?: TAsaasBilling
  @Property
  value?: string
  @Property
  description?: string
  @Property
  externalReference?: string
  @Property
  @FromJSON
  creditCardHolderInfo?: CAsaasCreditCardHolderInfo
  @Property
  customer?: string
  @Property
  dueDate?: string
  @Property
  remoteIp?: string
  @Property
  @FromJSON
  split?: CAsaasSplit
  @FromJSON
  creditCard?: CAsaasCard
  @Property
  creditCardToken?: string
}
