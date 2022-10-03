import { Property } from '../Decorators/Property';
import BaseJSON from './BaseJSON';

export default class CProcessPaymentResponse extends BaseJSON {
  static init(id: string, timestamp?: number): CProcessPaymentResponse {
    return this.createInitObject(arguments);
  }
}
