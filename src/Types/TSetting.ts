import TBaseType from './TBaseType';

export default class TSetting extends TBaseType {
  static TEXT = new TSetting('Text');
  static BOOL = new TSetting('Boolean');
  static NUMBER = new TSetting('Number');
  static CURRENCY = new TSetting('Currency');
  static LIST = new TSetting('List');
}
