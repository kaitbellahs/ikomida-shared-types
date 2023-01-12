import TBaseType from './TBaseType.js'

export default class TOrdersGroup extends TBaseType {
  static TABLE = new TOrdersGroup('TABLE')
  static TICKET = new TOrdersGroup('TICKET')
  static CASHIER = new TOrdersGroup('CASHIER')

  constructor(type: string) {
    super(type)
    switch (type) {
      case 'TABLE':
        this.name = 'Mesa'
        this.description = 'mesa'
        break
      case 'TICKET':
        this.name = 'Comanda'
        this.description = 'Comanda'
        break
      case 'CASHIER':
        this.name = 'Caixa'
        this.description = 'caixa'
        break
      default:
        this.name = '-'
        this.description = '-'
        break
    }
  }
}
