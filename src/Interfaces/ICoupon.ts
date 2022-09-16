import { Property } from '../Decorators';
import { Enum } from '../Decorators/Enum';
import { FromJSON } from '../Decorators/FromJSON';
import { TDiscount } from '../Types';
import BaseJSON from './BaseJSON';

export default class ICoupon extends BaseJSON {
  @Property
  name: string;
  @Property
  @FromJSON
  value: number;
  @Property
  @Enum
  valueType: TDiscount;
  @Property
  quantity?: number;
  @Property
  @FromJSON
  validity?: Date;
  @Property
  @FromJSON
  createdAt?: Date;

  constructor(
    name: string,
    value: number,
    valueType: TDiscount,
    quantity?: number,
    validity?: Date,
    createdAt?: Date,
    id?: string,
    timestamp?: number,
  ) {
    super({ id, timestamp })
    this.name = name
    this.value = value
    this.valueType = valueType
    this.quantity = quantity
    this.validity = validity
    this.createdAt = createdAt
  }
  static fromObject(object: any) {
    return new ICoupon(
      object.name ?? '',
      object.value ?? 0,
      object.valueType ?? TDiscount.NO,
      object.quantity,
      object.validity,
      object.createdAt,
      object.id,
      object.timestamp,
    );
  }
}
