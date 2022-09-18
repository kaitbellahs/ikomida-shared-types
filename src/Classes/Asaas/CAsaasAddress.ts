import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';

export default class CAsaasAddress extends BaseJSON {
  @Property
  postalCode!: string;
  @Property
  name!: string;
  @Property
  number!: string;
  @Property
  complement!: string;
  @Property
  province!: string;

  static init(postalCode: string, name: string, number: string, complement: string, province: string): CAsaasAddress {
    return this.createInitObject(arguments);
  }
}
