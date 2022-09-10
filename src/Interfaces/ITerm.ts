import { Enum } from '../Decorators/Enum';
import { TTerm } from '../Types';
import BaseJSON from './BaseJSON';

export default class ITerm extends BaseJSON {
  id?: string;
  name?: string;
  text?: string;
  @Enum
  type?: TTerm;
  active?: boolean;
  createdAt?: Date;
  timestamp?: number;
}
