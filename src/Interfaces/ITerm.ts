import { Property } from '../Decorators';
import { Enum } from '../Decorators/Enum';
import { FromJSON } from '../Decorators/FromJSON';
import { TTerm } from '../Types';
import BaseJSON from './BaseJSON';

export default class ITerm extends BaseJSON {
  @Property
  name: string;
  @Property
  text: string;
  @Property
  @Enum
  type: TTerm;
  @Property
  active?: boolean;
  @Property
  @FromJSON
  createdAt?: Date;

  constructor(
    name: string,
    text: string,
    type: TTerm,
    active?: boolean,
    createdAt?: Date,
    id?: string,
    timestamp?: number,
  ) {
    super({ id, timestamp })
    this.name = name
    this.text = text
    this.type = type
    this.active = active
    this.createdAt = createdAt
  }

}
