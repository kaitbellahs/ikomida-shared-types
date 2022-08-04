export class PagSeguro {
    static AUTHORIZED = 'AUTHORIZED';
    static PAID = 'PAID';
    static DECLINED = 'DECLINED';
    static CANCELED = 'CANCELED';
    static IN_DISPUTE = 'IN_DISPUTE';

    static keys = Object.keys(PagSeguro)
    static list = PagSeguro.keys.map((AsaasSignature) => {
        return {
            id: AsaasSignature,
            name: PagSeguro[AsaasSignature]
        };
    })
}
export class Asaas {
    static AUTHORIZED = 'AUTHORIZED';
    static CONFIRMED = 'CONFIRMED';
    static AVAILABLE = 'AVAILABLE';
    static PENDING = 'PENDING';
    static CANCELED = 'CANCELED';
    static IN_DISPUTE = 'IN_DISPUTE';

    static keys = Object.keys(Asaas)
    static list = Asaas.keys.map((AsaasSignature) => {
        return {
            id: AsaasSignature,
            name: Asaas[AsaasSignature]
        };
    })
}
export class AsaasSignature {
    static ACTIVE = 'ACTIVE';
    static CONFIRMED = 'CONFIRMED';
    static AVAILABLE = 'AVAILABLE';
    static CANCELED = 'CANCELED';
    static IN_DISPUTE = 'IN_DISPUTE';

    static keys = Object.keys(AsaasSignature)
    static list = AsaasSignature.keys.map((itemAsaasSignature) => {
        return {
            id: AsaasSignature,
            name: AsaasSignature[AsaasSignature]
        };
    })
}