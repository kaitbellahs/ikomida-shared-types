import TBaseType from './TBaseType';

export default class TAddress extends TBaseType {
  static RESIDENTIAL = new TAddress('RESIDENTIAL');
  static PROFESSIONAL = new TAddress('PROFESSIONAL');
  static OTHER = new TAddress('OTHER');

  constructor(type: string) {
    super(type);
    switch (type) {
      case 'RESIDENTIAL':
        this.name = 'Residencial';
        this.description = 'Residencial';
        break;
      case 'PROFESSIONAL':
        (this.name = 'Profissional'), (this.description = 'Profissional');
        break;
      case 'OTHER':
        (this.name = 'Outro'), (this.description = 'Outro');
        break;
      default:
        (this.name = '-'), (this.description = '-');
        break;
    }
  }
}
