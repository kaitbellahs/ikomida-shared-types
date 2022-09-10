import TBaseType from './TBaseType';

export default class TPIX extends TBaseType {
  static CPF = new TPIX('CPF');
  static CNPJ = new TPIX('CNPJ');
  static EMAIL = new TPIX('EMAIL');
  static PHONE = new TPIX('PHONE');
  static EVP = new TPIX('EVP');
  static BANK_ACCOUNT = new TPIX('BANK_ACCOUNT');

  constructor(type: string) {
    super(type);
    switch (type) {
      case 'CNPJ':
        this.name = 'CNPJ';
        this.description = 'CNPJ';
        break;
      case 'CPF':
        this.name = 'CPF';
        this.description = 'CPF';
        break;
      case 'PHONE':
        this.name = 'telefone';
        this.description = 'telefone';
        break;
      case 'EMAIL':
        this.name = 'email';
        this.description = 'email';
        break;
      case 'EVP':
        this.name = 'aleatoria';
        this.description = 'aleatoria';
        break;
      case 'BANK_ACCOUNT':
        this.name = 'conta bancaria';
        this.description = 'conta bancaria';
        break;
      default:
        this.name = '-';
        this.description = '-';
        break;
    }
  }
}
