import { Property } from '../Decorators/Property';
import BaseJSON from './BaseJSON';

export default class IVendorPaymentGateway extends BaseJSON {
  @Property
  type!: string;
  @Property
  data!: any;

  static init(type: string, data: any,
    id?: string,
    timestamp?: number,
  ): IVendorPaymentGateway {
    return this.createInitObject(arguments)
  }
}