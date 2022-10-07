import CPagSeguroRecurring from './CPagSeguroRecurring.js'
import CPagSeguroPaymentMethod from './CPagSeguroPaymentMethod.js'
import CPagSeguroAmount from './CPagSeguroAmount.js'
import BaseJSON from '../BaseJSON.js'
import { FromJSON } from '../../Decorators/FromJSON.js'
import { Property } from '../../Decorators/Property.js'
import { IMetadata } from '../../Interfaces/index.js'

export default class CPagSeguroChargeRequest extends BaseJSON {
  @Property
  @FromJSON
  amount?: CPagSeguroAmount
  @Property
  @FromJSON
  payment_method?: CPagSeguroPaymentMethod
  @Property
  @FromJSON
  recurring?: CPagSeguroRecurring
  @Property
  notification_urls?: string[]
  @Property
  reference_id?: string
  @Property
  description?: string
  @Property
  metadata?: IMetadata
}
