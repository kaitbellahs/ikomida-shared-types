import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CPagSeguroSummary extends BaseJSON {
  @Property
  total?: number
  @Property
  paid?: number
  @Property
  refunded?: number
}
