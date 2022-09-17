import { Property } from '../Decorators/Property';
import { Enum } from '../Decorators/Enum';
import { FromJSON } from '../Decorators/FromJSON';
import TDiscount from '../Types/TDiscount';
import TSupport from '../Types/TSupport';
import BaseJSON from './BaseJSON';
import CKeyValue from './CKeyValue';
import { Nullable } from '../Decorators';

export default class CPlan extends BaseJSON {
  @Property
  name!: string;
  @Property
  price!: number;
  @Property
  discountedPrice!: number;
  @Property
  discount!: number;
  @Property
  @Enum
  discountType!: TDiscount;
  @Property
  staff!: number;
  @Property
  products!: number;
  @Property
  categories!: number;
  @Property
  pushNotifications!: number;
  @Property
  orders!: number;
  @Property
  coupons!: number;
  @Property
  billing!: number;
  @Property
  details!: CKeyValue[];

  @FromJSON(TSupport)
  support!: TSupport[];
  @Property
  highlighted!: boolean;
  @Property
  @Nullable
  order?: number;

  static init(
    name: string,
    price: number,
    discountedPrice: number,
    discount: number,
    discountType: TDiscount,
    staff: number,
    products: number,
    categories: number,
    pushNotifications: number,
    orders: number,
    coupons: number,
    billing: number,
    details: CKeyValue[],
    support: TSupport[],
    highlighted: boolean,
    order?: number,
    id?: string,
    timestamp?: number,
  ): CPlan {
    return this.createInitObject(arguments);
  }
}
