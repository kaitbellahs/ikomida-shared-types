import { Property } from '../Decorators';
import { FromJSON } from '../Decorators/FromJSON';
import { IAsaasCard } from './Asaas';
import BaseJSON from './BaseJSON';
import IAddress from './IAddress';
import ICoupon from './ICoupon';
import ILocation from './ILocation';
import IProduct from './IProduct';

export default class IOrderPayload extends BaseJSON {
  @Property
  @FromJSON(IProduct)
  products: IProduct[];
  @Property
  @FromJSON
  payment: IAsaasCard;
  @Property
  @FromJSON
  address: IAddress;
  @Property
  delivery: number;
  @Property
  @FromJSON
  coupon?: ICoupon;
  @Property
  @FromJSON
  location?: ILocation;

  constructor(
    products: IProduct[],
    payment: IAsaasCard,
    address: IAddress,
    delivery: number,
    coupon?: ICoupon,
    location?: ILocation,
    id?: string,
    timestamp?: number,
  ) {
    super({ id, timestamp })
    this.products = products
    this.payment = payment
    this.address = address
    this.delivery = delivery
    this.coupon = coupon
    this.location = location
  }

}