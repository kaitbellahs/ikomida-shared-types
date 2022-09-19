import { Property } from '../Decorators/Property';
import BaseJSON from './BaseJSON';

export default class CProcessPaymentResponse extends BaseJSON {
    @Property
    id!: string;

    static init(
        id: string,
        timestamp?: number,
    ): CProcessPaymentResponse {
        return this.createInitObject(arguments);
    }
}
