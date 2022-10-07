import TBaseType from '../TBaseType.js'

export default class TPagSeguroPaymentMethod extends TBaseType {
  static CREDIT_CARD = new TPagSeguroPaymentMethod('CREDIT_CARD')
  static DEBIT_CARD = new TPagSeguroPaymentMethod('DEBIT_CARD')
  static BOLETO = new TPagSeguroPaymentMethod('BOLETO')
}
