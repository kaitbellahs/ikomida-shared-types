import { Property } from '../Decorators/Property';
import { Enum } from '../Decorators/Enum';
import { FromJSON } from '../Decorators/FromJSON';
import { TTerm } from '../Types';
import BaseJSON from './BaseJSON';

export default class ITerm extends BaseJSON {
  @Property
  name!: string;
  @Property
  text!: string;
  @Property
  @Enum
  type!: TTerm;
  @Property
  active?: boolean;
  @Property
  @FromJSON
  createdAt?: Date;

  static init(
    name: string,
    text: string,
    type: TTerm,
    active?: boolean,
    createdAt?: Date,
    id?: string,
    timestamp?: number,
  ): ITerm {
    return this.createInitObject(arguments)
  }
}