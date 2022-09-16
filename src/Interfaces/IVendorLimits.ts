import { BaseJSON } from ".";
import { Property } from "../Decorators";
import { FromJSON } from "../Decorators/FromJSON";

interface IVendorLimit {
    staff: number;
    products: number;
    orders: number;
    coupons: number;
    categories: number;
    pushNotifications: number;
    billing: number;
}

export default class IVendorLimits extends BaseJSON {
    @Property
    @FromJSON
    limits: IVendorLimit

    @Property
    @FromJSON
    used: IVendorLimit;

    constructor(limits: IVendorLimit, used: IVendorLimit,
        id?: string,
        timestamp?: number,
    ) {
        super({ id, timestamp })
        this.limits = limits
        this.used = used
    }

}