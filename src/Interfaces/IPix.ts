import { Property } from '../Decorators/Property';
import { Enum } from '../Decorators/Enum';
import { FromJSON } from '../Decorators/FromJSON';
import { TPIX } from '../Types';
import BaseJSON from './BaseJSON';

export default class IPix extends BaseJSON {
  @Property
  name!: string;
  @Property
  @Enum
  kind!: TPIX;
  @Property
  key?: string;
  @Property
  bank?: string;
  @Property
  agency?: string;
  @Property
  account?: string;
  @Property
  note?: string;
  @Property
  status?: string;
  @Property
  @FromJSON
  createdAt?: Date;

  static init(
    name: string,
    kind: TPIX,
    key?: string,
    bank?: string,
    agency?: string,
    account?: string,
    note?: string,
    status?: string,
    createdAt?: Date,
    id?: string,
    timestamp?: number,
  ): IPix {
    return this.createInitObject(arguments)
  }
}