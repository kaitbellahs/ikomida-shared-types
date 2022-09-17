import IPagSeguroCardResponse from './IPagSeguroCardResponse';
import IPagSeguroTokenData from './IPagSeguroTokenData';
import IPagSeguroCard from './IPagSeguroCard';
import IPagSeguroBoleto from './IPagSeguroBoleto';
import IPagSeguroAuthenticationMethod from './IPagSeguroAuthenticationMethod';
import { TPagSeguroPaymentMethod } from '../../Types/Pagseguro';
import { Enum } from '../../Decorators/Enum';
import BaseJSON from '../BaseJSON';
import { FromJSON } from '../../Decorators/FromJSON';
import { Property } from '../../Decorators/Property';

export default class IPagSeguroPaymentMethod extends BaseJSON {
  @Property
  @Enum
  type?: TPagSeguroPaymentMethod;
  @Property
  installments?: number;
  @Property
  capture?: boolean;
  @Property
  soft_descriptor?: string;
  @Property
  @FromJSON
  card?: IPagSeguroCard;
  @Property
  @FromJSON
  token_data?: IPagSeguroTokenData;
  @FromJSON
  authentication_method?: IPagSeguroAuthenticationMethod;
  @FromJSON
  boleto?: IPagSeguroBoleto;
}
