import { Property } from '../Decorators/Property';
import { Enum } from '../Decorators/Enum';
import { FromJSON } from '../Decorators/FromJSON';
import { TPaymentMethod } from '../Types';
import BaseJSON from './BaseJSON';
import { Nullable } from '../Decorators';

export default class CPaymentMethod extends BaseJSON {
  @Property
  @Enum
  type!: TPaymentMethod;
  @Property
  brand!: string;
  @Property
  lastDigits!: number;
  @Property
  @Nullable
  selected?: boolean;
  @Property
  @Nullable
  firstDigits?: number;
  @Property
  @FromJSON
  @Nullable
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
  ): CPaymentMethod {
    return this.createInitObject(arguments);
  }
}
