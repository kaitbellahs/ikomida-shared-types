import { TOrderStatus } from '../Types';
import { IAsaasCard } from './Asaas';
import BaseJSON from './BaseJSON';
import IAddress from './IAddress';
import ICoupon from './ICoupon';
import IOrderPreparation from './IOrderPreparation';
import IProduct from './IProduct';

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
  payment?: IAsaasCard;
  preparation?: IOrderPreparation;
  timestamp?: number;
}
