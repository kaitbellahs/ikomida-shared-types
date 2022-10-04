import CAsaasCard from './CAsaasCard'
import CAsaasSplit from './CAsaasSplit'
import CAsaasCreditCardHolderInfo from './CAsaasCreditCardHolderInfo'
import { TAsaasBilling } from '../../Types/Asaas'
import { Enum } from '../../Decorators/Enum'
import BaseJSON from '../BaseJSON'
import { FromJSON } from '../../Decorators/FromJSON'
import { Property } from '../../Decorators/Property'

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
