import { Property } from '../Decorators/Property.js'
import { FromJSON } from '../Decorators/FromJSON.js'
import BaseJSON from './BaseJSON.js'
import CBusinessTime from './CBusinessTime.js'
import CVendorDelivery from './CVendorDelivery.js'
import CVendorPaymentGateway from './CVendorPaymentGateway.js'
import CVendorPreparation from './CVendorPreparation.js'
import CVendorProfile from './CVendorProfile.js'
import { Nullable } from '../Decorators/index.js'
import TOrderType from '../Types/TOrderType.js'

export default class CVendorSettings extends BaseJSON {
  @Property
  @FromJSON
  @Nullable
  profile?: CVendorProfile
  @Property
  @FromJSON
  @Nullable
  paymentGateway?: CVendorPaymentGateway
  @Property
  @FromJSON
  @Nullable
  business?: CBusinessTime[]
  @Property
  @FromJSON
  @Nullable
  delivery?: CVendorDelivery
  @Property
  @FromJSON
  @Nullable
  preparation?: CVendorPreparation
  @Property
  @Nullable
  isActive?: boolean
  @Property
  @FromJSON(TOrderType)
  @Nullable
  orderTypes?: TOrderType[]
  @Property
  @Nullable
  tip?: number
}
