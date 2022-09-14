import { TOrderStatus, TPaymentMethod } from '../Types';
import BaseJSON from './BaseJSON';
import IAddress from './IAddress';
import ICoupon from './ICoupon';
import IOrderPreparation from './IOrderPreparation';
import IPaymentMethods from './IPaymentMethods';
import IProduct from './IProduct';
import IUser from './IUser';

export default class IOrder extends BaseJSON {
  subtotal?: number;
  discount?: number;
  delivery?: number;
  coupon?: ICoupon;
  createdAt?: Date;
  id?: string;
  customID?: number;
  status?: TOrderStatus;
  finishedAt?: Date;
  products?: IProduct[];
  address?: IAddress;
  paymentMethodType?: TPaymentMethod;
  payment?: IPaymentMethods;
  preparation?: IOrderPreparation;
  timestamp?: number;
  user?: IUser;
}
