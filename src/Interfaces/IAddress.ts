import EnumType from "../Decorators/EnumType";
import { TAddress } from "../Types";

export default abstract class IAddress {
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
