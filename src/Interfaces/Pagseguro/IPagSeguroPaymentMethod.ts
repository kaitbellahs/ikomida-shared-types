import IPagSeguroCardResponse from './IPagSeguroCardResponse';
import IPagSeguroTokenData from './IPagSeguroTokenData';
import IPagSeguroCard from './IPagSeguroCard';
import IPagSeguroBoleto from './IPagSeguroBoleto';
import IPagSeguroAuthenticationMethod from './IPagSeguroAuthenticationMethod';
import { TPagSeguroPaymentMethod } from '../../Types/Pagseguro';
import { Enum } from '../../Decorators/Enum';
import BaseJSON from '../BaseJSON';

export default class IPagSeguroPaymentMethod extends BaseJSON {
  @Enum
  type?: TPagSeguroPaymentMethod;
  installments?: number;
  capture?: boolean;
  soft_descriptor?: string;
  card?: IPagSeguroCard | IPagSeguroCardResponse;
  token_data?: IPagSeguroTokenData;
  authentication_method?: IPagSeguroAuthenticationMethod;
  boleto?: IPagSeguroBoleto;
}
