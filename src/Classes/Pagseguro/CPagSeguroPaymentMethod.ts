import CPagSeguroCardResponse from './CPagSeguroCardResponse';
import CPagSeguroTokenData from './CPagSeguroTokenData';
import CPagSeguroCard from './CPagSeguroCard';
import CPagSeguroBoleto from './CPagSeguroBoleto';
import CPagSeguroAuthenticationMethod from './CPagSeguroAuthenticationMethod';
import { TPagSeguroPaymentMethod } from '../../Types/Pagseguro';
import { Enum } from '../../Decorators/Enum';
import BaseJSON from '../BaseJSON';
import { FromJSON } from '../../Decorators/FromJSON';
import { Property } from '../../Decorators/Property';

export default class CPagSeguroPaymentMethod extends BaseJSON {
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
  card?: CPagSeguroCard;
  @Property
  @FromJSON
  token_data?: CPagSeguroTokenData;
  @FromJSON
  authentication_method?: CPagSeguroAuthenticationMethod;
  @FromJSON
  boleto?: CPagSeguroBoleto;
}
