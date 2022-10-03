import { Property } from '../Decorators/Property';
import { Enum } from '../Decorators/Enum';
import { FromJSON } from '../Decorators/FromJSON';
import { TDiscount } from '../Types';
import BaseJSON from './BaseJSON';
import CProductCategory from './CProductCategory';
import { Nullable } from '../Decorators';
import CProductOptionCategory from './CProductOptionCategory';
import CProductOption from './CProductOption';

export default class CProduct extends BaseJSON {
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
  @Nullable
  description?: string;
  @Property
  @Nullable
  order?: number;
  @Property
  @Nullable
  serves?: number;
  @Property
  weight?: number;
  @Property
  @FromJSON
  @Nullable
  category?: CProductCategory;
  @Property
  @Nullable
  image?: string;
  @Property
  @FromJSON(CProductOptionCategory)
  @Nullable
  optionsCategories?: CProductOptionCategory[];
  @Property
  @FromJSON(CProductOption)
  @Nullable
  options?: CProductOption[];
  @Property
  @FromJSON
  @Nullable
  createdAt?: Date;

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
    category?: CProductCategory,
    image?: string,
    optionsCategories?: CProductOptionCategory[],
    options?: CProductOption[],
    createdAt?: Date,
    id?: string,
    timestamp?: number,
  ): CProduct {
    return this.createInitObject(arguments);
  }
}
