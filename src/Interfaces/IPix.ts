import { Property } from '../Decorators';
import { Enum } from '../Decorators/Enum';
import { FromJSON } from '../Decorators/FromJSON';
import { TPIX } from '../Types';
import BaseJSON from './BaseJSON';

export default class IPix extends BaseJSON {
  @Property
  name: string;
  @Property
  @Enum
  type: TPIX;
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

  constructor(
    name: string,
    type: TPIX,
    key?: string,
    bank?: string,
    agency?: string,
    account?: string,
    note?: string,
    status?: string,
    createdAt?: Date,
    id?: string,
    timestamp?: number,
  ) {
    super({ id, timestamp })
    this.name = name
    this.type = type
    this.key = key
    this.bank = bank
    this.agency = agency
    this.account = account
    this.note = note
    this.status = status
    this.createdAt = createdAt
  }
}