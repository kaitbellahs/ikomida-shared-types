import TBaseType from './TBaseType.js'

export default class TOrderType extends TBaseType {
  static DELIVERY = new TOrderType('DELIVERY')
  static PICKUP = new TOrderType('PICKUP')
  static LOCAL = new TOrderType('LOCAL')
  constructor(type: string) {
    super(type)
    switch (type) {
      case 'DELIVERY':
        this.name = 'Entrega'
        this.description = 'Entrega a domicílio'
        break
      case 'PICKUP':
        this.name = 'Retirada'
        this.description = 'Retirada no local'
        break
      case 'LOCAL':
        this.name = 'Consumação'
        this.description = 'Consumação no local'
        break
      default:
        this.name = '-'
        this.description = '-'
        break
    }
  }
}
