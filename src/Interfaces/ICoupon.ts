import { Property } from '../Decorators/Property';
import { Enum } from '../Decorators/Enum';
import { FromJSON } from '../Decorators/FromJSON';
import { TDiscount } from '../Types';
import BaseJSON from './BaseJSON';

export default class ICoupon extends BaseJSON {
  @Property
  name!: string;
  @Property
  value!: number;
  @Property
  @Enum
  valueType!: TDiscount;
  @Property
  quantity?: number;
  @Property
  @FromJSON
  validity?: Date;
  @Property
  @FromJSON
  createdAt?: Date;

  static init(
    name: string,
    value: number,
    valueType: TDiscount,
    quantity?: number,
    validity?: Date,
    createdAt?: Date,
    id?: string,
    timestamp?: number,
  ): ICoupon {
    return this.createInitObject(arguments)
  }
}
