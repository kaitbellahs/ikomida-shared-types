import { Property } from '../Decorators/Property';
import BaseJSON from './BaseJSON';

export default class CVendorDelivery extends BaseJSON {
  @Property
  free!: boolean;
  @Property
  value!: number;
  @Property
  min!: number;

  static init(free: boolean, value: number, min: number, id?: string, timestamp?: number): CVendorDelivery {
    return this.createInitObject(arguments);
  }
}
