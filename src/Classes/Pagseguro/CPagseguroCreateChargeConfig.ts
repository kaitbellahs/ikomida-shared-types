import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CPagseguroCreateChargeConfig extends BaseJSON {
  host?: string
  @Property
  uri?: string
}
