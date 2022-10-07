import { Property } from '../Decorators/Property.js'
import BaseJSON from './BaseJSON.js'

export default class CProcessPaymentResponse extends BaseJSON {
  static init(id: string, timestamp?: number): CProcessPaymentResponse {
    return this.createInitObject(arguments)
  }
}
