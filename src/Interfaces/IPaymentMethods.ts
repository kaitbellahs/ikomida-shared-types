import { Enum } from '../Decorators/Enum';
import { TPaymentMethod } from '../Types';
import BaseJSON from './BaseJSON';

export default class IPaymentMethods extends BaseJSON {
  id?: string;
  @Enum
  type?: TPaymentMethod;
  brand?: string;
  firstDigits?: number;
  lastDigits?: number;
  selected?: boolean;
  createdAt?: Date;
  timestamp?: number;
}
