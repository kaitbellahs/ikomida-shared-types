import { Property } from '../Decorators/Property';
import { Enum } from '../Decorators/Enum';
import { FromJSON } from '../Decorators/FromJSON';
import { TTerm } from '../Types';
import BaseJSON from './BaseJSON';
import { Nullable } from '../Decorators';

export default class CTerm extends BaseJSON {
  @Property
  name!: string;
  @Property
  text!: string;
  @Property
  @Enum
  type!: TTerm;
  @Property
  @Nullable
  active?: boolean;
  @Property
  @FromJSON
  @Nullable
  createdAt?: Date;

  static init(
    name: string,
    text: string,
    type: TTerm,
    active?: boolean,
    createdAt?: Date,
    id?: string,
    timestamp?: number,
  ): CTerm {
    return this.createInitObject(arguments);
  }
}
