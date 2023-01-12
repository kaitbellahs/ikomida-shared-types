import { Property } from '../Decorators/Property.js'
import { FromJSON } from '../Decorators/FromJSON.js'
import BaseJSON from './BaseJSON.js'
import CAddress from './CAddress.js'
import CApp from './CApp.js'
import CCreditCardRequest from './CCreditCardRequest.js'
import CPlan from './CPlan.js'
import { Nullable } from '../Decorators/index.js'
import TAsaasBilling from '../Types/Asaas/TAsaasBilling.js'
import CUserPayment from './CUserPayment.js'

export default class CContract extends BaseJSON {
  @Property
  ikomidaID!: string
  @Property
  contractName!: string
  @Property
  name!: string
  @Property
  lastName!: string
  @Property
  contractIdentity!: string
  @Property
  email!: string
  @Property
  phone!: string
  @Property
  areaCode!: number
  @Property
  @FromJSON
  plan?: CPlan
  @Property
  @Nullable
  identity?: string
  @Property
  @Nullable
  status?: string
  @Property
  @Nullable
  termId?: string
  @Property
  @Nullable
  password?: string
  @Property
  @Nullable
  confirmPassword?: string
  @Property
  @FromJSON
  @Nullable
  address?: CAddress
  @Property
  @Nullable
  referredBy?: string
  @Property(CApp)
  @FromJSON(CApp)
  @Nullable
  apps?: CApp[]
  @Property
  @Nullable
  phoneValidationCode?: string
  @Property
  signature?: string
  @Property
  @FromJSON
  @Nullable
  payment?: CCreditCardRequest
  @Property
  @FromJSON
  @Nullable
  createdAt?: Date
  @Property
  @FromJSON
  @Nullable
  billingType?: TAsaasBilling
  @Property
  @FromJSON(CUserPayment)
  @Nullable
  payments?: CUserPayment[]

  static init(
    ikomidaID: string,
    contractName: string,
    name: string,
    lastName: string,
    contractIdentity: string,
    email: string,
    phone: string,
    areaCode: number,
    plan?: CPlan,
    identity?: string,
    status?: string,
    termId?: string,
    password?: string,
    confirmPassword?: string,
    address?: CAddress,
    referredBy?: string,
    apps?: CApp[],
    phoneValidationCode?: string,
    signature?: string,
    payment?: CCreditCardRequest,
    billingType?: TAsaasBilling,
    createdAt?: Date,
    payments?: CUserPayment[],
    id?: string,
    timestamp?: number
  ): CContract {
    return this.createInitObject(arguments, [
      'ikomidaID',
      'contractName',
      'name',
      'lastName',
      'contractIdentity',
      'email',
      'phone',
      'areaCode',
      'plan',
      'identity',
      'status',
      'termId',
      'password',
      'confirmPassword',
      'address',
      'referredBy',
      'apps',
      'phoneValidationCode',
      'signature',
      'payment',
      'billingType',
      'createdAt',
      'payments',
      'id',
      'timestamp'
    ])
  }
}
