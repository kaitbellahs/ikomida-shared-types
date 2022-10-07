import { Property } from '../Decorators/Property.js'
import BaseJSON from './BaseJSON.js'

export default class CMessage extends BaseJSON {
  @Property
  subject?: string
  @Property
  body?: string
}
