import { Enum } from '../Decorators/Enum';
import { TDiscount } from '../Types';
import BaseJSON from './BaseJSON';
import IProductCategory from './IProductCategory';

export default class IProduct extends BaseJSON {
  id?: string;
  title?: string;
  image?: string;
  description?: string;
  order?: number;
  price?: number;
  serves?: number;
  weight?: number;
  discount?: number;
  @Enum
  discountType?: TDiscount;
  quantity?: number;
  category?: IProductCategory;
}
