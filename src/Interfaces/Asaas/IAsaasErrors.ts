import IAsaasError from "./IAsaasError";

export default abstract class IAsaasErrors {
    errors?: IAsaasError[];

    constructor(errors?: IAsaasError[]) {
        this.errors = errors
    }
}
