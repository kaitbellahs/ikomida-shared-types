import { Property } from '../Decorators';
import { FromJSON } from '../Decorators/FromJSON';
import BaseJSON from './BaseJSON';
import IProduct from './IProduct';

export default class ICategoryProducts extends BaseJSON {
  @Property
  title: string;
  @Property
  order?: number;
  @Property
  description?: string;
  @Property
  createdAt?: string;
  @Property
  @FromJSON(IProduct)
  products?: IProduct[];

  constructor(
    title: string,
    order?: number,
    description?: string,
    createdAt?: string,
    products?: IProduct[],
    id?: string,
    timestamp?: number,
  ) {
    super({ id, timestamp })
    this.title = title
    this.order = order
    this.description = description
    this.createdAt = createdAt
    this.products = products
  }

}
