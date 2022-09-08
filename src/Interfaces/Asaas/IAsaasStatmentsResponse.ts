import IAsaasErrors from "./IAsaasErrors";
import IAsaasStatment from "./IAsaasStatment";

export default interface IAsaasStatmentsResponse extends IAsaasErrors {
    object: string;
    hasMore: boolean;
    totalCount: number;
    limit: number;
    offset: number;
    data: IAsaasStatment[];
}
