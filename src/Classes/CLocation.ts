import { Nullable } from '../Decorators/index.js'
import { Property } from '../Decorators/Property.js'
import BaseJSON from './BaseJSON.js'

export default class CLocation extends BaseJSON {
  @Property
  @Nullable
  latitude?: number
  @Property
  @Nullable
  longitude?: number
  static init(latitude?: number, longitude?: number, id?: string, timestamp?: number): CLocation {
    return this.createInitObject(arguments, ['latitude', 'longitude', 'id', 'timestamp'])
  }
}
