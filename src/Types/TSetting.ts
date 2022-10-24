import TBaseType from './TBaseType.js'

export default class TSetting extends TBaseType {
  static TEXT = new TSetting('TEXT')
  static BOOL = new TSetting('BOOL')
  static NUMBER = new TSetting('NUMBER')
  static CURRENCY = new TSetting('CURRENCY')
  static LIST = new TSetting('LIST')
}
