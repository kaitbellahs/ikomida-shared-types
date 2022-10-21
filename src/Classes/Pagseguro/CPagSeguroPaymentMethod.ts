import CPagSeguroTokenData from './CPagSeguroTokenData.js'
import CPagSeguroCard from './CPagSeguroCard.js'
import CPagSeguroBoleto from './CPagSeguroBoleto.js'
import CPagSeguroAuthenticationMethod from './CPagSeguroAuthenticationMethod.js'
import { TPagSeguroPaymentMethod } from '../../Types/Pagseguro/index.js'
import { Enum } from '../../Decorators/Enum.js'
import BaseJSON from '../BaseJSON.js'
import { FromJSON } from '../../Decorators/FromJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CPagSeguroPaymentMethod extends BaseJSON {
  @Property
  @Enum
  type?: TPagSeguroPaymentMethod
  @Property
  installments?: number
  @Property
  capture?: boolean
  @Property
  soft_descriptor?: string
  @Property
  @FromJSON
  card?: CPagSeguroCard
  @Property
  @FromJSON
  token_data?: CPagSeguroTokenData
  @FromJSON
  authentication_method?: CPagSeguroAuthenticationMethod
  @FromJSON
  boleto?: CPagSeguroBoleto
}
