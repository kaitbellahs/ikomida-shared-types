import { Property } from '../Decorators';
import { Enum } from '../Decorators/Enum';
import { FromJSON } from '../Decorators/FromJSON';
import { TPagSeguroPaymentStatus, TPaymentMethod } from '../Types';
import BaseJSON from './BaseJSON';

export default class IPaymentMethods extends BaseJSON {
  @Property
  @Enum
  type: TPaymentMethod;
  @Property
  brand: string;
  @Property
  lastDigits: number;
  @Property
  selected?: boolean;
  @Property
  firstDigits?: number;
  @Property
  @FromJSON
  createdAt?: Date;

  constructor(
    type: TPaymentMethod,
    brand: string,
    lastDigits: number,
    selected?: boolean,
    firstDigits?: number,
    createdAt?: Date,
    id?: string,
    timestamp?: number,
  ) {
    super({ id, timestamp })
    this.type = type
    this.brand = brand
    this.lastDigits = lastDigits
    this.selected = selected
    this.firstDigits = firstDigits
    this.createdAt = createdAt
  }
}