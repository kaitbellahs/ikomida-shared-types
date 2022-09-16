import { Property } from '../Decorators';
import BaseJSON from './BaseJSON';

export default class IVendorDelivery extends BaseJSON {
  @Property
  free: boolean;
  @Property
  value: number;
  @Property
  min: number;

  constructor(free: boolean, value: number, min: number,
    id?: string,
    timestamp?: number,
  ) {
    super({ id, timestamp })
    this.free = free
    this.value = value
    this.min = min
  }

}
