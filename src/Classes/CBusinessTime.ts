import { Property } from '../Decorators/Property.js'
import { FromJSON } from '../Decorators/FromJSON.js'
import BaseJSON from './BaseJSON.js'
import CBusinessTimeHours from './CBusinessTimeHours.js'
import { Nullable } from '../Decorators/index.js'

export default class CBusinessTime extends BaseJSON {
  @Property
  @Nullable
  day?: number
  @Property
  @FromJSON(CBusinessTimeHours)
  @Nullable
  hours?: CBusinessTimeHours[]

  static init(day?: number, hours?: CBusinessTimeHours[], id?: string, timestamp?: number): CBusinessTime {
    return this.createInitObject(arguments, ['day', 'hours', 'id', 'timestamp'])
  }
}
