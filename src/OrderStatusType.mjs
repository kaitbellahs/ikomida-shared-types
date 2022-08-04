export default class OrderStatusType {
    static WAITING_PAYMENT = 'waitingPayment'
    static OPEN = 'open'
    static ACCEPTED = 'accepted'
    static WAITING_DELIVERY = 'waitingDelivery'
    static IN_DELIVERY = 'inDelivery'
    static DELIVERED = 'delivered'
    static CANCELED = 'canceled'
    static IN_DISPUTE = 'inDispute'

    static keys = Object.keys(OrderStatusType)
    static list = OrderStatusType.keys.map((orderStatusType) => {
        return {
            id: orderStatusType,
            name: OrderStatusType[orderStatusType]
        }
    })
}