import { Property } from '../Decorators/Property';
import { Enum } from '../Decorators/Enum';
import { FromJSON } from '../Decorators/FromJSON';
import { TOrderStatus, TPaymentMethod } from '../Types';
import BaseJSON from './BaseJSON';
import CAddress from './CAddress';
import CCoupon from './CCoupon';
import COrderPreparation from './COrderPreparation';
import CPaymentMethods from './CPaymentMethods';
import CProduct from './CProduct';
import CUser from './CUser';
import { Nullable } from '../Decorators';

export default class COrder extends BaseJSON {
  @Property
  subtotal!: number;
  @Property
  discount!: number;
  @Property
  delivery!: number;
  @Property
  @FromJSON(CProduct)
  products!: CProduct[];
  @Property
  @FromJSON
  address!: CAddress;
  @Property
  @Enum
  paymentMethodType!: TPaymentMethod;
  @Property
  @FromJSON
  preparation!: COrderPreparation;
  @Property
  @FromJSON
  @Nullable
  coupon?: CCoupon;
  @Property
  @FromJSON
  @Nullable
  createdAt?: Date;
  @Property
  @Nullable
  customID?: number;
  @Property
  @Enum
  @Nullable
  status?: TOrderStatus;
  @Property
  @FromJSON
  @Nullable
  finishedAt?: Date;
  @Property
  @FromJSON
  @Nullable
  payment?: CPaymentMethods;
  @Property
  @FromJSON
  @Nullable
  user?: CUser;

  static init(
    subtotal: number,
    discount: number,
    delivery: number,
    products: CProduct[],
    address: CAddress,
    paymentMethodType: TPaymentMethod,
    preparation: COrderPreparation,
    coupon?: CCoupon,
    createdAt?: Date,
    customID?: number,
    status?: TOrderStatus,
    finishedAt?: Date,
    payment?: CPaymentMethods,
    user?: CUser,
    id?: string,
    timestamp?: number,
  ): COrder {
    return this.createInitObject(arguments);
  }
}
