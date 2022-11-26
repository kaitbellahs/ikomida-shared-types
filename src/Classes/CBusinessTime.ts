import { Property } from '../Decorators/Property.js'
import { FromJSON } from '../Decorators/FromJSON.js'
import BaseJSON from './BaseJSON.js'
import CBusinessTimeHours from './CBusinessTimeHours.js'
import { Nullable } from '../Decorators/index.js'

export default class CBusinessTime extends BaseJSON {
  @Property
  @Nullable
  days?: number[]
  @Property
  @FromJSON(CBusinessTimeHours)
  @Nullable
  hours?: CBusinessTimeHours[]
}
