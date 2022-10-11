import { Nullable } from '../Decorators/index.js'
import { Property } from '../Decorators/Property.js'
import { IMetadata } from '../Interfaces/index.js'
import BaseJSON from './BaseJSON.js'

export default class CProcessPayment extends BaseJSON {
  @Property
  paymentMethodID!: string
  @Property
  amount!: number
  @Property
  referenceId!: string
  @Property
  @Nullable
  metadata?: IMetadata
  @Property
  @Nullable
  description?: string

  static init(
    paymentMethodID: string,
    amount: number,
    referenceId: string,
    metadata?: IMetadata,
    description?: string,
    id?: string,
    timestamp?: number
  ): CProcessPayment {
    return this.createInitObject(arguments, [
      'paymentMethodID',
      'amount',
      'referenceId',
      'metadata',
      'description',
      'id',
      'timestamp'
    ])
  }
}
