import TBaseType from './TBaseType.js'
import TOrderType from './TOrderType.js'

export default class TOrderStatus extends TBaseType {
  static WAITING_PAYMENT = new TOrderStatus('WAITING_PAYMENT')
  static OPEN = new TOrderStatus('OPEN')
  static ACCEPTED = new TOrderStatus('ACCEPTED')
  static WAITING_DELIVERY = new TOrderStatus('WAITING_DELIVERY')
  static WAITING_PICKUP = new TOrderStatus('WAITING_PICKUP')
  static WAITING_LOCAL = new TOrderStatus('WAITING_LOCAL')
  static IN_DELIVERY = new TOrderStatus('IN_DELIVERY')
  static IN_TABLE_DELIVERY = new TOrderStatus('IN_TABLE_DELIVERY')
  static DELIVERED = new TOrderStatus('DELIVERED')
  static IN_DISPUTE = new TOrderStatus('IN_DISPUTE')
  static CANCELED = new TOrderStatus('CANCELED')
  constructor(type: string) {
    super(type)
    switch (type) {
      case 'WAITING_PAYMENT':
        this.name = 'aguardando pagamento'
        break
      case 'OPEN':
        this.name = 'aguardando aprovação'
        break
      case 'ACCEPTED':
        this.name = 'em preparação'
        break
      case 'WAITING_DELIVERY':
        this.name = 'esperando o entregador'
        break
      case 'WAITING_PICKUP':
        this.name = 'esperando a retirada'
        break
      case 'WAITING_LOCAL':
        this.name = 'esperando o garçom'
        break
      case 'IN_DELIVERY':
        this.name = 'a caminho do cliente'
        break
      case 'IN_TABLE_DELIVERY':
        this.name = 'a caminho da mesa do cliente'
        break
      case 'DELIVERED':
        this.name = 'entregue'
        break
      case 'CANCELED':
        this.name = 'cancelado'
        break
      case 'IN_DISPUTE':
        this.name = 'em disputa'
        break
    }
    this.description = this.name
  }
  nextStatus(orderType: TOrderType) {
    switch (orderType) {
      case TOrderType.DELIVERY:
        if (this === TOrderStatus.ACCEPTED) {
          return TOrderStatus.WAITING_DELIVERY
        } else if (this === TOrderStatus.WAITING_DELIVERY) {
          return TOrderStatus.IN_DELIVERY
        } else if (this === TOrderStatus.IN_DELIVERY) {
          return TOrderStatus.DELIVERED
        }
        return this.next()
      case TOrderType.LOCAL:
        if (this === TOrderStatus.ACCEPTED) {
          return TOrderStatus.WAITING_LOCAL
        } else if (this === TOrderStatus.WAITING_LOCAL) {
          return TOrderStatus.IN_TABLE_DELIVERY
        }
        return this.next()
      case TOrderType.PICKUP:
        if (this === TOrderStatus.ACCEPTED) {
          return TOrderStatus.WAITING_PICKUP
        } else if (this === TOrderStatus.WAITING_PICKUP) {
          return TOrderStatus.DELIVERED
        }
        return this.next()
    }
  }
}
