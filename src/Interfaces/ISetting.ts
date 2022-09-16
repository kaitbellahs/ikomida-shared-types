import { Property } from '../Decorators';
import { Enum } from '../Decorators/Enum';
import { FromJSON } from '../Decorators/FromJSON';
import { TSetting } from '../Types';
import BaseJSON from './BaseJSON';

export default class ISetting extends BaseJSON {
  @Property
  name: string;
  @Property
  value: string;
  @Property
  @Enum
  type: TSetting;
  @Property
  active: boolean;
  @Property
  @FromJSON
  createdAt?: Date;

  constructor(
    name: string,
    value: string,
    type: TSetting,
    active: boolean,
    createdAt?: Date,
    id?: string,
    timestamp?: number,
  ) {
    super({ id, timestamp })
    this.name = name
    this.value = value
    this.type = type
    this.active = active
    this.createdAt = createdAt
  }

}
