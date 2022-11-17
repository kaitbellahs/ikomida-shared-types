import { Property } from '../Decorators/Property.js'
import { FromJSON } from '../Decorators/FromJSON.js'
import BaseJSON from './BaseJSON.js'
import CAddress from './CAddress.js'
import CApp from './CApp.js'
import CCreditCardRequest from './CCreditCardRequest.js'
import CPlan from './CPlan.js'
import { Nullable } from '../Decorators/index.js'
import TAsaasBilling from '../Types/Asaas/TAsaasBilling.js'
import CAsaasPaymentQrCode from './Asaas/CAsaasPaymentQrCode.js'

export default class CContractResult extends BaseJSON {
  @Property
  ikomidaID!: string
  @Property
  contractName!: string
  @Property
  name!: string
  @Property
  lastName!: string
  @Property
  @FromJSON
  plan!: CPlan
  @Property
  @FromJSON
  @Nullable
  billingType!: TAsaasBilling
  @Property
  @FromJSON
  pix?: CAsaasPaymentQrCode
  @Property
  @FromJSON
  bankSlipUrl?: string

  static init(
    ikomidaID: string,
    contractName: string,
    name: string,
    lastName: string,
    plan: CPlan,
    billingType: TAsaasBilling,
    pix?: CAsaasPaymentQrCode,
    bankSlipUrl?: string,
    id?: string,
    timestamp?: number
  ): CContractResult {
    return this.createInitObject(arguments, [
      'ikomidaID',
      'contractName',
      'name',
      'lastName',
      'plan',
      'billingType',
      'pix',
      'bankSlipUrl',
      'id',
      'timestamp'
    ])
  }
}
