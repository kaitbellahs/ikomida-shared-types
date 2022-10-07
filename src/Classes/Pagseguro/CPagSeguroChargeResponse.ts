import CPagSeguroAmount from './CPagSeguroAmount.js'
import CPagSeguroPaymentMethod from './CPagSeguroPaymentMethod.js'
import CPagSeguroErrorResponse from './CPagSeguroErrorResponse.js'
import CPagSeguroPaymentResponse from './CPagSeguroPaymentResponse.js'
import CPagSeguroLink from './CPagSeguroLink.js'
import { FromJSON } from '../../Decorators/FromJSON.js'
import { Property } from '../../Decorators/Property.js'
import { TPagSeguroPaymentStatus } from '../../Types/index.js'
import { Enum } from '../../Decorators/Enum.js'
import { IMetadata } from '../../Interfaces/index.js'

export default class CPagSeguroChargeResponse extends CPagSeguroErrorResponse {
  @Property
  reference_id?: string
  @Property
  @Enum
  status?: TPagSeguroPaymentStatus
  @Property
  @FromJSON
  created_at?: Date
  @Property
  @FromJSON
  paid_at?: Date
  @Property
  description?: string
  @Property
  @FromJSON
  amount?: CPagSeguroAmount
  @Property
  @FromJSON
  payment_response?: CPagSeguroPaymentResponse
  @Property
  @FromJSON
  payment_method?: CPagSeguroPaymentMethod
  @FromJSON(CPagSeguroLink)
  links?: CPagSeguroLink[]
  @Property
  notification_urls?: string[]
  @Property
  metadata?: IMetadata
  @Property
  notificationCode?: string
}
