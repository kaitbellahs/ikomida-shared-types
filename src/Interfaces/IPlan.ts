import { Property } from '../Decorators';
import { Enum } from '../Decorators/Enum';
import { FromJSON } from '../Decorators/FromJSON';
import TDiscount from '../Types/TDiscount';
import TSupport from '../Types/TSupport';
import BaseJSON from './BaseJSON';
import IKeyValue from './IKeyValue';

export default class IPlan extends BaseJSON {
  @Property
  name: string;
  @Property
  price: number;
  @Property
  discountedPrice: number;
  @Property
  discount: number;
  @Property
  @Enum
  discountType: TDiscount;
  @Property
  staff: number;
  @Property
  products: number;
  @Property
  categories: number;
  @Property
  pushNotifications: number;
  @Property
  orders: number;
  @Property
  coupons: number;
  @Property
  billing: number;
  @Property
  details: IKeyValue[];

  @FromJSON(TSupport)
  support: TSupport[];
  @Property
  highlighted: boolean;
  @Property
  order?: number;

  constructor(
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
    details: IKeyValue[],
    support: TSupport[],
    highlighted: boolean,
    order?: number,
    id?: string,
    timestamp?: number,
  ) {
    super({ id, timestamp })
    this.name = name
    this.price = price
    this.discountedPrice = discountedPrice
    this.discount = discount
    this.discountType = discountType
    this.staff = staff
    this.products = products
    this.categories = categories
    this.pushNotifications = pushNotifications
    this.orders = orders
    this.coupons = coupons
    this.billing = billing
    this.details = details
    this.support = support
    this.highlighted = highlighted
    this.order = order
  }

}