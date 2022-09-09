import EnumType from "../Decorators/EnumType";
import { TAddress } from "../Types";
import BaseJSON from "./BaseJSON";

export default abstract class IAddress extends BaseJSON {
    @EnumType
    type: TAddress;
    postalCode: string;
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    stat: string;
    complement?: string;
    reference?: string;

    constructor(
        type: TAddress,
        postalCode: string,
        street: string,
        number: string,
        neighborhood: string,
        city: string,
        stat: string,
        complement?: string,
        reference?: string
    ) {
        super()
        this.type = type
        this.postalCode = postalCode
        this.street = street
        this.number = number
        this.neighborhood = neighborhood
        this.city = city
        this.stat = stat
        this.complement = complement
        this.reference = reference
    }

}
