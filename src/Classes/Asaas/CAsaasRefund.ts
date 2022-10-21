import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CAsaasRefund extends BaseJSON {
  @Property
  dateCreated?: string
  @Property
  status?: string
  @Property
  value?: number
  @Property
  description?: string
  @Property
  transactionReceiptURL?: string
}
