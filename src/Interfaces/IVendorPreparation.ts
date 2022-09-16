import { Property } from '../Decorators';
import BaseJSON from './BaseJSON';

export default class IVendorPreparation extends BaseJSON {
  @Property
  min: number;
  @Property
  max: number;

  constructor(min: number, max: number,
    id?: string,
    timestamp?: number,
  ) {
    super({ id, timestamp })
    this.min = min
    this.max = max
  }

}
