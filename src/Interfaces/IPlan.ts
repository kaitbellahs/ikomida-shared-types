import TDiscount from "../Types/TDiscount";
import TSupport from "../Types/TSupport";
import IKeyValue from "./IKeyValue";

export default abstract class IPlan {
    name: string;
    price: number;
    discountedPrice: number;
    discount: number;
    discountType: TDiscount;
    order: number;
    staff: number;
    products: number;
    categories: number;
    pushNotifications: number;
    orders: number;
    billing: number;
    details: IKeyValue[];
    support: TSupport[];
    highlighted: boolean;
    id?: string;

    constructor(
        name: string,
        price: number,
        discountedPrice: number,
        discount: number,
        discountType: TDiscount,
        order: number,
        staff: number,
        products: number,
        categories: number,
        pushNotifications: number,
        orders: number,
        billing: number,
        details: IKeyValue[],
        support: TSupport[],
        highlighted: boolean,
        id?: string
    ) {
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
        this.billing = billing
        this.details = details
        this.support = support
        this.highlighted = highlighted
        this.id = id
    }

}
