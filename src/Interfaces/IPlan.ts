import EnumType from "../Decorators/EnumType";
import TDiscount from "../Types/TDiscount";
import TSupport from "../Types/TSupport";
import BaseJSON from "./BaseJSON";
import IKeyValue from "./IKeyValue";

export default abstract class IPlan extends BaseJSON {
    name?: string;
    price?: number;
    discountedPrice?: number;
    discount?: number;
    @EnumType
    discountType?: TDiscount;
    order?: number;
    staff?: number;
    products?: number;
    categories?: number;
    pushNotifications?: number;
    orders?: number;
    coupons?: number;
    billing?: number;
    details?: IKeyValue[];
    @EnumType
    support?: TSupport[];
    highlighted?: boolean;
    id?: string;
    timestamp?: number;

    constructor(
        name?: string,
        price?: number,
        discountedPrice?: number,
        discount?: number,
        discountType?: TDiscount,
        order?: number,
        staff?: number,
        products?: number,
        categories?: number,
        pushNotifications?: number,
        orders?: number,
        coupons?: number,
        billing?: number,
        details?: IKeyValue[],
        support?: TSupport[],
        highlighted?: boolean,
        id?: string,
        timestamp?: number
    ) {
        super()
        this.name = name
        this.price = price
        this.discountedPrice = discountedPrice
        this.discount = discount
        this.discountType = discountType
        this.order = order
        this.staff = staff
        this.products = products
        this.categories = categories
        this.pushNotifications = pushNotifications
        this.orders = orders
        this.
            coupons =
            coupons
        this.billing = billing
        this.details = details
        this.support = support
        this.highlighted = highlighted
        this.id = id
        this.timestamp = timestamp
    }

}
