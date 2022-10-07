import { FromJSON } from '../../Decorators/FromJSON.js'
import BaseJSON from '../BaseJSON.js'
import CPagSeguroSummary from './CPagSeguroSummary.js'
import { Property } from '../../Decorators/Property.js'

export default class CPagSeguroAmount extends BaseJSON {
  @Property
  value?: number
  @Property
  currency?: string
  @Property
  @FromJSON
  summary?: CPagSeguroSummary
}
