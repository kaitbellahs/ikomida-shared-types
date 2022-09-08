import EnumType from "../../Decorators/EnumType";
import { TAsaasDiscount } from "../../Types/Asaas";

export default abstract class IAsaasDiscount {
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
        this.value = value
        this.type = type
        this.limitDate = limitDate
        this.dueDateLimitDays = dueDateLimitDays
    }

}
