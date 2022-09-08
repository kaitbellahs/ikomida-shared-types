import TBaseType from "./TBaseType"

export default class TSupport extends TBaseType {
  static EMAIL = new TSupport('Email')
  static WHATSAPP = new TSupport('Whatsapp')
  static CALL = new TSupport('Ligação')
  static CHAT = new TSupport('Bate papo')
}