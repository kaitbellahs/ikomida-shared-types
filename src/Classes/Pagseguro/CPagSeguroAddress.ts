import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CPagSeguroAddress extends BaseJSON {
  @Property
  street?: string
  @Property
  number?: string
  @Property
  complement?: string
  @Property
  locality?: string
  @Property
  city?: string
  @Property
  region_code?: string
  @Property
  country?: string
  @Property
  postal_code?: string
}
