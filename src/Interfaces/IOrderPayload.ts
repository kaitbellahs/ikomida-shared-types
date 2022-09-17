import { Property } from '../Decorators/Property';
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
  products!: IProduct[];
  @Property
  @FromJSON
  payment!: IAsaasCard;
  @Property
  @FromJSON
  address!: IAddress;
  @Property
  delivery!: number;
  @Property
  @FromJSON
  coupon?: ICoupon;
  @Property
  @FromJSON
  location?: ILocation;

  static init(
    products: IProduct[],
    payment: IAsaasCard,
    address: IAddress,
    delivery: number,
    coupon?: ICoupon,
    location?: ILocation,
    id?: string,
    timestamp?: number,
  ): IOrderPayload {
    return this.createInitObject(arguments)
  }
}