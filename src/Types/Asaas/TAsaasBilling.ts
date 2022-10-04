import TBaseType from '../TBaseType'

export default class TAsaasBilling extends TBaseType {
  static BOLETO = new TAsaasBilling('BOLETO')
  static CREDIT_CARD = new TAsaasBilling('CREDIT_CARD')
  static PIX = new TAsaasBilling('PIX')
  static UNDEFINED = new TAsaasBilling('UNDEFINED')
}
