import BaseJSON from "../BaseJSON";
import IAsaasError from "./IAsaasError";

export default abstract class IAsaasErrors extends BaseJSON {
    errors?: IAsaasError[];

    constructor(errors?: IAsaasError[]) {
        super()
        this.errors = errors
    }
}
