import { TDiscount } from "../Types";
import BaseJSON from "./BaseJSON";

export default class ICoupon extends BaseJSON {
    id?: string;
    name?: string;
    value?: number;
    valueType?: TDiscount;
}
