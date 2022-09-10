import TBaseType from '../TBaseType';

export default class TAsaasDiscount extends TBaseType {
  static FIXED = new TAsaasDiscount('FIXED');
  static PERCENTAGE = new TAsaasDiscount('PERCENTAGE');
}
