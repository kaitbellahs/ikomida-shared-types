import { Property } from '../Decorators';
import { Enum } from '../Decorators/Enum';
import { FromJSON } from '../Decorators/FromJSON';
import { TOrderStatus, TPaymentMethod } from '../Types';
import BaseJSON from './BaseJSON';
import IAddress from './IAddress';
import ICoupon from './ICoupon';
import IOrderPreparation from './IOrderPreparation';
import IPaymentMethods from './IPaymentMethods';
import IProduct from './IProduct';
import IUser from './IUser';

export default class IOrder extends BaseJSON {
  @Property
  subtotal: number;
  @Property
  discount: number;
  @Property
  delivery: number;
  @Property
  @FromJSON(IProduct)
  products: IProduct[];
  @Property
  @FromJSON
  address: IAddress;
  @Property
  @Enum
  paymentMethodType: TPaymentMethod;
  @Property
  @FromJSON
  preparation: IOrderPreparation;
  @Property
  @FromJSON
  coupon?: ICoupon;
  @Property
  @FromJSON
  createdAt?: Date;
  @Property
  customID?: number;
  @Property
  @Enum
  status?: TOrderStatus;
  @Property
  @FromJSON
  finishedAt?: Date;
  @Property
  @FromJSON
  payment?: IPaymentMethods;
  @Property
  @FromJSON
  user?: IUser;

  constructor(
    subtotal: number,
    discount: number,
    delivery: number,
    products: IProduct[],
    address: IAddress,
    paymentMethodType: TPaymentMethod,
    preparation: IOrderPreparation,
    coupon?: ICoupon,
    createdAt?: Date,
    customID?: number,
    status?: TOrderStatus,
    finishedAt?: Date,
    payment?: IPaymentMethods,
    user?: IUser,
    id?: string,
    timestamp?: number,
  ) {
    super({ id, timestamp })
    this.subtotal = subtotal
    this.discount = discount
    this.delivery = delivery
    this.products = products
    this.address = address
    this.paymentMethodType = paymentMethodType
    this.preparation = preparation
    this.coupon = coupon
    this.createdAt = createdAt
    this.customID = customID
    this.status = status
    this.finishedAt = finishedAt
    this.payment = payment
    this.user = user
  }
}