import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'
import { FromJSON } from '../../Decorators/FromJSON.js'

export default class CAsaasPaymentQrCode extends BaseJSON {
  @Property
  success!: boolean
  @Property
  encodedImage?: string
  @Property
  payload?: string
  @Property
  @FromJSON
  expirationDate?: Date
}
