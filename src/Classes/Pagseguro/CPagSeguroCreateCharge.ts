import { Enum } from '../../Decorators/Enum.js'
import { FromJSON } from '../../Decorators/FromJSON.js'
import { TPagSeguroPaymentMethod } from '../../Types/Pagseguro/index.js'
import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'
import CPagSeguroCard from './CPagSeguroCard.js'
import CPagseguroCreateChargeConfig from './CPagseguroCreateChargeConfig.js'
import { Nullable } from '../../Decorators/index.js'
import { IMetadata } from '../../Interfaces/index.js'

export default class CPagSeguroCreateCharge extends BaseJSON {
  @Property
  reference!: string
  @Property
  amount!: number
  @Property
  @Enum
  type!: TPagSeguroPaymentMethod
  @Property
  statementID!: string
  @Property
  @FromJSON
  @Nullable
  config?: CPagseguroCreateChargeConfig
  @Property
  @Nullable
  contractID?: string
  @Property
  @FromJSON
  @Nullable
  card?: CPagSeguroCard
  @Property
  @Nullable
  cardToken?: string
  @Property
  @Nullable
  description?: string
  @Property
  @Nullable
  metadata?: IMetadata

  static init(
    reference: string,
    amount: number,
    type: TPagSeguroPaymentMethod,
    statementID: string,
    config?: CPagseguroCreateChargeConfig,
    contractID?: string,
    card?: CPagSeguroCard,
    cardToken?: string,
    description?: string,
    metadata?: IMetadata,
    id?: string,
    timestamp?: number
  ): CPagSeguroCreateCharge {
    return this.createInitObject(arguments)
  }
}
