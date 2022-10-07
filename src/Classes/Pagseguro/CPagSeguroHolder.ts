import BaseJSON from '../BaseJSON.js'
import { Property } from '../../Decorators/Property.js'

export default class CPagSeguroHolder extends BaseJSON {
  @Property
  name?: string
}
