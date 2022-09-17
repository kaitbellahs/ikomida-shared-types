import { Property } from '../Decorators/Property';
import { Enum } from '../Decorators/Enum';
import { FromJSON } from '../Decorators/FromJSON';
import { TDiscount } from '../Types';
import BaseJSON from './BaseJSON';
import IProductCategory from './IProductCategory';

export default class IProduct extends BaseJSON {
  @Property
  title!: string;
  @Property
  price!: number;
  @Property
  discount!: number;
  @Property
  @Enum
  discountType!: TDiscount;
  @Property
  quantity!: number;
  @Property
  description?: string;
  @Property
  order?: number;
  @Property
  serves?: number;
  @Property
  weight?: number;
  @Property
  @FromJSON
  category?: IProductCategory;
  @Property
  image?: string;
  @Property
  @FromJSON
  createdAt?: Date

  static init(
    title: string,
    price: number,
    discount: number,
    discountType: TDiscount,
    quantity: number,
    description?: string,
    order?: number,
    serves?: number,
    weight?: number,
    category?: IProductCategory,
    image?: string,
    createdAt?: Date,
    id?: string,
    timestamp?: number,
  ): IProduct {
    return this.createInitObject(arguments)
  }
}