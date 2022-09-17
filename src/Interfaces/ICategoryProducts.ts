import { Property } from '../Decorators/Property';
import { FromJSON } from '../Decorators/FromJSON';
import BaseJSON from './BaseJSON';
import IProduct from './IProduct';

export default class ICategoryProducts extends BaseJSON {
  @Property
  title!: string;
  @Property
  order?: number;
  @Property
  description?: string;
  @Property
  createdAt?: string;
  @Property
  @FromJSON(IProduct)
  products?: IProduct[];

  static init(
    title: string,
    order?: number,
    description?: string,
    createdAt?: string,
    products?: IProduct[],
    id?: string,
    timestamp?: number,
  ): ICategoryProducts {
    return this.createInitObject(arguments)
  }
}