import { Property } from '../Decorators/Property';
import BaseJSON from './BaseJSON';

export default class CVendorPaymentGateway extends BaseJSON {
  @Property
  type!: string;
  @Property
  integrated!: any;

  static init(type: string, integrated: any, id?: string, timestamp?: number): CVendorPaymentGateway {
    return this.createInitObject(arguments);
  }
}
