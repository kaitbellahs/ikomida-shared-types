import { IAsaasCard } from "./Asaas";
import BaseJSON from "./BaseJSON";
import IAddress from "./IAddress";
import ICoupon from "./ICoupon";
import ILocation from "./ILocation";
import IProduct from "./IProduct";

export default class IOrderPayload extends BaseJSON {
    items?: IProduct[];
    coupon?: ICoupon;
    payment?: IAsaasCard;
    address?: IAddress;
    location?: ILocation;
    delivery?: number;
}
