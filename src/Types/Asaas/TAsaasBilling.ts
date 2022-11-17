import TBaseType from '../TBaseType.js'

export default class TAsaasBilling extends TBaseType {
  static BOLETO = new TAsaasBilling('BOLETO')
  static CREDIT_CARD = new TAsaasBilling('CREDIT_CARD')
  static PIX = new TAsaasBilling('PIX')
  static UNDEFINED = new TAsaasBilling('UNDEFINED')

  static get methods() {
    return [TAsaasBilling.CREDIT_CARD, TAsaasBilling.PIX, TAsaasBilling.BOLETO]
  }

  constructor(type: string) {
    super(type)
    switch (type) {
      case 'BOLETO':
        this.name = 'Boleto'
        this.description = 'Boleto'
        break
      case 'CREDIT_CARD':
        this.name = 'Cartão de crédito'
        this.description = 'Cartão de crédito'
        break
      case 'PIX':
        this.name = 'PIX'
        this.description = 'PIX'
        break
      default:
        this.name = '-'
        this.description = '-'
        break
    }
  }
}