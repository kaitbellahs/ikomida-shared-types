import BaseJSON from '../BaseJSON';
import { Property } from '../../Decorators/Property';
import { Nullable } from '../../Decorators';

export default class CAsaasCard extends BaseJSON {
  @Property
  holderName!: string;
  @Property
  number!: number;
  @Property
  expiryMonth!: number;
  @Property
  expiryYear!: number;
  @Property
  ccv!: number;
  @Property
  @Nullable
  id?: string;

  static init(
    holderName: string,
    number: number,
    expiryMonth: number,
    expiryYear: number,
    ccv: number,
    id?: string,
  ): CAsaasCard {
    return this.createInitObject(arguments);
  }
}
