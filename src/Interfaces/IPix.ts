import { Enum } from '../Decorators/Enum';
import { TPIX } from '../Types';
import BaseJSON from './BaseJSON';

export default class IPix extends BaseJSON {
  id?: string;
  name?: string;
  @Enum
  type?: TPIX;
  key?: string;
  bank?: string;
  agency?: string;
  account?: string;
  note?: string;
  status?: string;
  createdAt?: Date;
  timestamp?: number;
}
