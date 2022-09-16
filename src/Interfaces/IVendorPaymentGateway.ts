import { Property } from '../Decorators';
import BaseJSON from './BaseJSON';

export default class IVendorPaymentGateway extends BaseJSON {
  @Property
  type: string;
  @Property
  data: any;

  constructor(type: string, data: any,
    id?: string,
    timestamp?: number,
  ) {
    super({ id, timestamp })
    this.type = type
    this.data = data
  }

}
