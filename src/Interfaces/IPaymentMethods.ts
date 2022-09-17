import { Property } from '../Decorators/Property';
import { Enum } from '../Decorators/Enum';
import { FromJSON } from '../Decorators/FromJSON';
import { TPagSeguroPaymentStatus, TPaymentMethod } from '../Types';
import BaseJSON from './BaseJSON';

export default class IPaymentMethods extends BaseJSON {
  @Property
  @Enum
  type!: TPaymentMethod;
  @Property
  brand!: string;
  @Property
  lastDigits!: number;
  @Property
  selected?: boolean;
  @Property
  firstDigits?: number;
  @Property
  @FromJSON
  createdAt?: Date;

  static init(
    type: TPaymentMethod,
    brand: string,
    lastDigits: number,
    selected?: boolean,
    firstDigits?: number,
    createdAt?: Date,
    id?: string,
    timestamp?: number,
  ): IPaymentMethods {
    return this.createInitObject(arguments)
  }
}