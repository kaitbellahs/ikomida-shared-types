import { TDiscount } from "../Types";
import BaseJSON from "./BaseJSON";

export default class IProduct extends BaseJSON {
    id?: string;
    title?: string;
    price?: number;
    discount?: number;
    discountType?: TDiscount;
    quantity?: number;
}
