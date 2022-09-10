import { Enum } from '../Decorators/Enum';
import { TSetting } from '../Types';
import BaseJSON from './BaseJSON';

export default class ISetting extends BaseJSON {
  id?: string;
  name?: string;
  value?: string;
  @Enum
  type?: TSetting;
  active?: boolean;
  createdAt?: Date;
  timestamp?: number;
}
