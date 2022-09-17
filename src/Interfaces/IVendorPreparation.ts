import { Property } from '../Decorators/Property';
import BaseJSON from './BaseJSON';

export default class IVendorPreparation extends BaseJSON {
  @Property
  min!: number;
  @Property
  max!: number;

  static init(min: number, max: number,
    id?: string,
    timestamp?: number,
  ): IVendorPreparation {
    return this.createInitObject(arguments)
  }
}