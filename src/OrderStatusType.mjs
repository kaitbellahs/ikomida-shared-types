export default class OrderStatusType {
    static CANCELED = 'CANCELED'
    static WAITING_PAYMENT = 'WAITING_PAYMENT'
    static OPEN = 'OPEN'
    static ACCEPTED = 'ACCEPTED'
    static WAITING_DELIVERY = 'WAITING_DELIVERY'
    static IN_DELIVERY = 'IN_DELIVERY'
    static DELIVERED = 'DELIVERED'
    static IN_DISPUTE = 'IN_DISPUTE'

    static keys = Object.keys(OrderStatusType)
    static list = OrderStatusType.keys.map((orderStatusType) => {
        return {
            id: orderStatusType,
            name: OrderStatusType[orderStatusType]
        }
    })
}