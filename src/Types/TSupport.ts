import TBaseType from './TBaseType'

export default class TSupport extends TBaseType {
  static EMAIL = new TSupport('EMAIL')
  static WHATSAPP = new TSupport('WHATSAPP')
  static CALL = new TSupport('CALL')
  static CHAT = new TSupport('CHAT')
  constructor(type: string) {
    super(type)
    switch (type) {
      case 'EMAIL':
        this.name = 'Email'
        break
      case 'WHATSAPP':
        this.name = 'Whatsapp'
        break
      case 'CALL':
        this.name = 'Ligação'
        break
      case 'CHAT':
        this.name = 'Bate papo'
        break
    }
  }
}
