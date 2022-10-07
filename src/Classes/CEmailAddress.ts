import { Property } from '../Decorators/Property.js'
import BaseJSON from './BaseJSON.js'

export default class CEmailAddres extends BaseJSON {
  @Property
  email?: string
  @Property
  name?: string
}
