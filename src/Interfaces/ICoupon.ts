import { TDiscount } from "../Types";
import BaseJSON from "./BaseJSON";

export default class ICoupon extends BaseJSON {
    id?: string;
    name?: string;
    validity?: Date;
    quantity?: number;
    value?: number;
    valueType?: TDiscount;
    timestamp?: number;
}
