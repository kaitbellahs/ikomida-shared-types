import { Nullable } from '../Decorators'
import { Property } from '../Decorators/Property'
import { IMetadata } from '../Interfaces'
import BaseJSON from './BaseJSON'

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
    return this.createInitObject(arguments)
  }
}
