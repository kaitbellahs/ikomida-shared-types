import { Nullable } from '../Decorators';
import { Property } from '../Decorators/Property';
import BaseJSON from './BaseJSON';

export default class CProductOption extends BaseJSON {
  @Property
  name!: string;
  @Property
  highlighted!: boolean;
  @Property
  price!: number
  @Property
  units!: number
  @Property
  order!: number
  @Property
  @Nullable
  image?: string;

  static init(
    name: string,
    highlighted: boolean,
    price: number,
    units: number,
    order: number,
    image?: string, id?: string, timestamp?: number): CProductOption {
    return this.createInitObject(arguments);
  }
}
