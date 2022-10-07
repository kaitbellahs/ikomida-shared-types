import { Property } from '../Decorators/Property.js'
import BaseJSON from './BaseJSON.js'

export default class CRandCode extends BaseJSON {
  @Property
  count?: number
  @Property
  length?: number
  @Property
  charset?: string
  @Property
  prefix?: string
  @Property
  postfix?: string
  @Property
  pattern?: string
}
