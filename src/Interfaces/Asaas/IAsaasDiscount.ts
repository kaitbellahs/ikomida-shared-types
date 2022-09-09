import EnumType from "../../Decorators/EnumType";
import { TAsaasDiscount } from "../../Types/Asaas";
import BaseJSON from "../BaseJSON";

export default abstract class IAsaasDiscount extends BaseJSON {
    value: number;
    @EnumType
    type: TAsaasDiscount;
    limitDate?: Date;
    dueDateLimitDays?: number;

    constructor(
        value: number,
        type: TAsaasDiscount,
        limitDate?: Date,
        dueDateLimitDays?: number
    ) {
        super()
        this.value = value
        this.type = type
        this.limitDate = limitDate
        this.dueDateLimitDays = dueDateLimitDays
    }

}
