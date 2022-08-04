export default class PaymentStatusType {
    static AUTHORIZED = 'authorized';
    static PAID = 'pais';
    static DECLINED = 'declined';
    static CANCELED = 'canceled';
    static IN_DISPUTE = 'inDispute';

    static keys = Object.keys(PaymentStatusType)
    static list = PaymentStatusType.keys.map((paymentStatusType) => {
        return {
            id: paymentStatusType,
            name: PaymentStatusType[paymentStatusType]
        };
    })
}